using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using System.Threading.Tasks;
using WeatherApi.Controllers;
using WeatherApi.Models;
using WeatherApi.Services.Interfaces;
using Xunit;

namespace WeatherApi.Tests.Controllers
{
    public class WeatherControllerTests
    {
        private readonly WeatherController _controller;
        private readonly Mock<IWeatherService> _mockService;
        private readonly Mock<ILogger<WeatherController>> _mockLogger;

        public WeatherControllerTests()
        {
            _mockService = new Mock<IWeatherService>();
            _mockLogger = new Mock<ILogger<WeatherController>>();
            _controller = new WeatherController(_mockService.Object, _mockLogger.Object);
        }

        [Fact]
        public async Task GetWeather_ReturnsOkResult_WithWeatherData()
        {
            // Arrange
            var weatherData = new WeatherData { Temperature = 25, Humidity = 60, Condition = "Sunny" };
            _mockService.Setup(service => service.GetWeatherDataAsync()).ReturnsAsync(weatherData);

            // Act
            var result = await _controller.GetWeather();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedWeatherData = Assert.IsType<WeatherData>(okResult.Value);
            Assert.Equal(weatherData.Temperature, returnedWeatherData.Temperature);
            Assert.Equal(weatherData.Humidity, returnedWeatherData.Humidity);
            Assert.Equal(weatherData.Condition, returnedWeatherData.Condition);
        }

        [Fact]
        public async Task GetWeather_ReturnsNotFound_WhenNoData()
        {
            // Arrange
            _mockService.Setup(service => service.GetWeatherDataAsync()).ReturnsAsync((WeatherData)null);

            // Act
            var result = await _controller.GetWeather();

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }
    }
}