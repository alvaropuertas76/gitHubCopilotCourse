using Moq;
using System.Threading.Tasks;
using WeatherApi.Models;
using WeatherApi.Services.Interfaces;
using Xunit;

namespace WeatherApi.Tests.Services
{
    public class WeatherServiceTests
    {
        private readonly Mock<IWeatherRepository> _weatherRepositoryMock;
        private readonly IWeatherService _weatherService;

        public WeatherServiceTests()
        {
            _weatherRepositoryMock = new Mock<IWeatherRepository>();
            _weatherService = new WeatherService(_weatherRepositoryMock.Object);
        }

        [Fact]
        public async Task GetWeatherDataAsync_ReturnsWeatherData()
        {
            // Arrange
            var expectedWeatherData = new WeatherData
            {
                Temperature = 25,
                Humidity = 60,
                Condition = "Sunny"
            };
            _weatherRepositoryMock.Setup(repo => repo.GetWeatherData()).ReturnsAsync(expectedWeatherData);

            // Act
            var result = await _weatherService.GetWeatherDataAsync();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(expectedWeatherData.Temperature, result.Temperature);
            Assert.Equal(expectedWeatherData.Humidity, result.Humidity);
            Assert.Equal(expectedWeatherData.Condition, result.Condition);
        }
    }
}