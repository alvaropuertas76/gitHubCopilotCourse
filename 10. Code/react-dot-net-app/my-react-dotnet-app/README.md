# My React .NET App

This project is a full-stack application that combines a React front end with a .NET back end. It serves as a template for building web applications that require a modern user interface and a robust server-side API.

## Project Structure

```
my-react-dotnet-app
├── backend                # .NET backend application
│   ├── Controllers        # Contains API controllers
│   ├── Models             # Contains data models
│   ├── Program.cs         # Entry point of the .NET application
│   ├── Startup.cs         # Configures services and request pipeline
│   ├── appsettings.json   # Configuration settings
│   └── my-react-dotnet-app.csproj # Project file
├── frontend               # React front end application
│   ├── public             # Public assets
│   ├── src                # Source files for React application
│   └── package.json       # NPM configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (version 5.0 or later)
- [Node.js](https://nodejs.org/) (version 14 or later)

### Setup Instructions

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd my-react-dotnet-app
   ```

2. **Set up the backend:**

   Navigate to the `backend` directory and run the following command to restore dependencies:

   ```
   dotnet restore
   ```

   Then, run the application:

   ```
   dotnet run
   ```

   The backend will be available at `http://localhost:5000`.

3. **Set up the frontend:**

   Navigate to the `frontend` directory and install the dependencies:

   ```
   npm install
   ```

   Then, start the React application:

   ```
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

## Usage

- The backend provides an API for weather forecasts, which can be accessed through the defined endpoints in the `WeatherForecastController`.
- The frontend is built using React and can be customized to meet your application needs.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.