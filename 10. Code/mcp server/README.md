# Weather MCP Server

This project implements a Model Context Protocol (MCP) server in TypeScript using the official MCP SDK. It exposes weather tools for alerts and forecasts, suitable for integration with GitHub Copilot and Claude for Desktop.

## Features
- `get-alerts`: Get weather alerts for a US state (two-letter code).
- `get-forecast`: Get weather forecast for a given latitude and longitude.

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Build the project:
   ```sh
   npx tsc
   ```
3. Run the server:
   ```sh
   node ./build/index.js
   ```

## VS Code Integration
- The `.vscode/mcp.json` file is configured for MCP server debugging.
- You can connect this server to Claude for Desktop or other MCP-compatible clients.

## References
- MCP Protocol: https://modelcontextprotocol.io/llms-full.txt
- SDK: https://github.com/modelcontextprotocol/create-python-server

## Custom Copilot Instructions
See `.github/copilot-instructions.md` for workspace-specific Copilot guidance.
