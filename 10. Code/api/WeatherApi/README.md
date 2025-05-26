# Weather API

This project is a .NET API that provides weather data. It is structured into multiple layers, including a Service Layer and a Data Access Layer (DAL), and connects to a SQL Server database.

## Project Structure

- **WeatherApi.sln**: Solution file that organizes the project and its components.
- **src/WeatherApi**: Contains the main API code.
  - **Controllers**: Contains the API controllers.
    - `WeatherController.cs`: Handles HTTP requests for weather data.
  - **Models**: Contains data models.
    - `WeatherData.cs`: Represents the structure of weather data.
  - `Program.cs`: Entry point of the application.
  - `Startup.cs`: Configures services and the request pipeline.
  - `appsettings.json`: Configuration settings, including database connection strings.
- **src/WeatherApi.Services**: Contains the service layer.
  - **Interfaces**: Contains service interfaces.
    - `IWeatherService.cs`: Defines methods for retrieving weather data.
  - `WeatherService.cs`: Implements the weather service logic.
- **src/WeatherApi.DAL**: Contains the data access layer.
  - **Interfaces**: Contains repository interfaces.
    - `IWeatherRepository.cs`: Defines methods for data access.
  - `WeatherRepository.cs`: Implements data access methods.
  - `WeatherDbContext.cs`: Represents the session with the database.
- **tests/WeatherApi.Tests**: Contains unit tests for the API.
  - **Controllers**: Tests for the controllers.
    - `WeatherControllerTests.cs`: Tests for the WeatherController.
  - **Services**: Tests for the services.
    - `WeatherServiceTests.cs`: Tests for the WeatherService.
  - **DAL**: Tests for the data access layer.
    - `WeatherRepositoryTests.cs`: Tests for the WeatherRepository.

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Restore the NuGet packages:
   ```
   dotnet restore
   ```
4. Update the `appsettings.json` file with your SQL Server connection string.
5. Run the application:
   ```
   dotnet run --project src/WeatherApi/WeatherApi.csproj
   ```

## Usage

Once the API is running, you can access the weather data by sending HTTP GET requests to the appropriate endpoints defined in the `WeatherController`.