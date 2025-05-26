using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using my_react_dotnet_app.Models;
using my_react_dotnet_app.Services;

namespace my_react_dotnet_app.Controllers
{
    /// <summary>
    /// Controller for handling weather forecast related API requests.
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWeatherForecastService _weatherForecastService;

        public WeatherForecastController(
            ILogger<WeatherForecastController> logger,
            IWeatherForecastService weatherForecastService)
        {
            _logger = logger;
            _weatherForecastService = weatherForecastService;
        }

        /// <summary>
        /// GET /WeatherForecast
        /// Returns a list of weather forecasts.
        /// </summary>
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return _weatherForecastService.GetForecasts();
        }
    }
}