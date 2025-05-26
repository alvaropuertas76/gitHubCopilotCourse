using System;
using Xunit;

public class WeatherForecastServiceTests
{
    [Fact]
    public void Test_GetWeatherForecast_ReturnsExpectedResult()
    {
        // Arrange
        var service = new WeatherForecastService();
        
        // Act
        var result = service.GetWeatherForecast();

        // Assert
        Assert.NotNull(result);
        Assert.Equal(5, result.Length);
    }
}