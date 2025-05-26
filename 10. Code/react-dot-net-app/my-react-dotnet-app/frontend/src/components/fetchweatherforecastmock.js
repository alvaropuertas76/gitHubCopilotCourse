// Mock API connection for weather forecasts

export async function fetchWeatherForecasts() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    // Return mock data
    return [
        {
            date: '2025-05-06',
            temperatureC: 22,
            summary: 'Sunny'
        },
        {
            date: '2025-05-07',
            temperatureC: 18,
            summary: 'Cloudy'
        },
        {
            date: '2025-05-08',
            temperatureC: 15,
            summary: 'Rainy'
        }
    ];
}