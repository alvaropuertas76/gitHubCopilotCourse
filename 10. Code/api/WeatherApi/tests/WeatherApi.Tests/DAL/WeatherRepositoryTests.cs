using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;
using Xunit;

namespace WeatherApi.Tests.DAL
{
    public class WeatherRepositoryTests
    {
        private readonly WeatherDbContext _context;
        private readonly WeatherRepository _repository;

        public WeatherRepositoryTests()
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddDbContext<WeatherDbContext>(options =>
                options.UseInMemoryDatabase("TestDatabase"));

            var serviceProvider = serviceCollection.BuildServiceProvider();
            _context = serviceProvider.GetRequiredService<WeatherDbContext>();
            _repository = new WeatherRepository(_context);
        }

        [Fact]
        public async Task GetWeatherData_ShouldReturnWeatherData()
        {
            // Arrange
            var weatherData = new WeatherData { Temperature = 25, Humidity = 60, Condition = "Sunny" };
            await _context.WeatherData.AddAsync(weatherData);
            await _context.SaveChangesAsync();

            // Act
            var result = await _repository.GetWeatherData();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(1, result.Count);
            Assert.Equal(weatherData.Temperature, result[0].Temperature);
            Assert.Equal(weatherData.Humidity, result[0].Humidity);
            Assert.Equal(weatherData.Condition, result[0].Condition);
        }
    }
}