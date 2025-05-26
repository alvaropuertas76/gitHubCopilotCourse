# Weather Application

This is a weather application built using React for the client-side and Node.js for the server-side. The application fetches weather data from an external API and displays it to users in a user-friendly interface.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the React application.

- **public/index.html**: The main HTML file for the React application.
- **public/manifest.json**: Metadata about the web application.
- **src/components/WeatherCard.jsx**: A component that displays weather information.
- **src/App.jsx**: The root component that manages the application state.
- **src/index.jsx**: The entry point for the React application.
- **src/styles/App.css**: CSS styles for the application.
- **package.json**: Configuration file for the client-side application.

### Server

The `server` directory contains the Node.js application.

- **src/controllers/weatherController.js**: Contains methods for fetching and processing weather data.
- **src/routes/weatherRoutes.js**: Sets up the routes for weather-related API endpoints.
- **src/app.js**: The entry point for the Node.js server.
- **src/config/config.js**: Configuration settings for the server.
- **package.json**: Configuration file for the server-side application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. In a new terminal, navigate back to the client directory and start the React application:
   ```
   cd ../client
   npm start
   ```

## Features

- Fetches real-time weather data from an external API.
- Displays weather information including temperature, condition, and location.
- Responsive design for better user experience.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.