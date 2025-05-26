# Weather Application Server

This is the server-side of the Weather Application built with Node.js and Express. The server handles API requests for weather data and serves as the backend for the client-side React application.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   ```
   cd weather-app/server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your configuration).

### API Endpoints

- `GET /api/weather`: Fetches weather data based on location.

### Configuration

Configuration settings such as API keys and base URLs can be found in the `src/config/config.js` file. Make sure to update these settings with your own credentials.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.