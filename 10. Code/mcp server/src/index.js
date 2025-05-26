"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-mcp-server/1.0";
const server = new mcp_js_1.McpServer({
    name: "weather-mcp-server",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
async function makeNWSRequest(url) {
    const headers = {
        "User-Agent": USER_AGENT,
        Accept: "application/geo+json",
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        return (await response.json());
    }
    catch (error) {
        console.error("Error making NWS request:", error);
        return null;
    }
}
function formatAlert(feature) {
    const props = feature.properties;
    return [
        `Event: ${props.event || "Unknown"}`,
        `Area: ${props.areaDesc || "Unknown"}`,
        `Severity: ${props.severity || "Unknown"}`,
        `Status: ${props.status || "Unknown"}`,
        `Headline: ${props.headline || "No headline"}`,
        "---",
    ].join("\n");
}
server.tool("get-alerts", "Get weather alerts for a US state (two-letter code)", {
    state: zod_1.z.string().length(2).describe("Two-letter state code (e.g. CA, NY)"),
}, async ({ state }) => {
    const stateCode = state.toUpperCase();
    const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
    const alertsData = await makeNWSRequest(alertsUrl);
    if (!alertsData) {
        return { content: [{ type: "text", text: "Failed to retrieve alerts data" }] };
    }
    const features = alertsData.features || [];
    if (features.length === 0) {
        return { content: [{ type: "text", text: `No active alerts for ${stateCode}` }] };
    }
    const formattedAlerts = features.map(formatAlert);
    const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join("\n")}`;
    return { content: [{ type: "text", text: alertsText }] };
});
server.tool("get-forecast", "Get weather forecast for a location (latitude, longitude)", {
    latitude: zod_1.z.number().min(-90).max(90).describe("Latitude of the location"),
    longitude: zod_1.z.number().min(-180).max(180).describe("Longitude of the location"),
}, async ({ latitude, longitude }) => {
    const pointsUrl = `${NWS_API_BASE}/points/${latitude.toFixed(4)},${longitude.toFixed(4)}`;
    const pointsData = await makeNWSRequest(pointsUrl);
    if (!pointsData || !pointsData.properties.forecast) {
        return { content: [{ type: "text", text: `Failed to retrieve grid point data for coordinates: ${latitude}, ${longitude}. This location may not be supported by the NWS API (only US locations are supported).` }] };
    }
    const forecastUrl = pointsData.properties.forecast;
    const forecastData = await makeNWSRequest(forecastUrl);
    if (!forecastData || !forecastData.properties.periods) {
        return { content: [{ type: "text", text: "Failed to retrieve forecast data." }] };
    }
    const periods = forecastData.properties.periods;
    const forecastText = periods.map(p => `${p.name || ""}: ${p.shortForecast || ""} ${p.temperature || ""}${p.temperatureUnit || ""}, Wind: ${p.windSpeed || ""} ${p.windDirection || ""}`).join("\n");
    return { content: [{ type: "text", text: `Forecast for (${latitude}, ${longitude}):\n\n${forecastText}` }] };
});
const transport = new stdio_js_1.StdioServerTransport();
(async () => {
    await server.connect(transport);
})();
