using System;
using System.Collections.Generic;
using System.Linq;
using my_react_dotnet_app.Models;

namespace my_react_dotnet_app.Services
{
    /// <summary>
    /// Service for generating weather forecast data.
    /// </summary>
    public interface IWeatherForecastService
    {
        /// <summary>
        /// Returns a collection of randomly generated weather forecasts.
        /// </summary>
        IEnumerable<WeatherForecast> GetForecasts();
    }

    /// <summary>
    /// Implementation of IWeatherForecastService that generates random weather data.
    /// </summary>
    public class WeatherForecastService : IWeatherForecastService
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        /// <inheritdoc/>
        public IEnumerable<WeatherForecast> GetForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
