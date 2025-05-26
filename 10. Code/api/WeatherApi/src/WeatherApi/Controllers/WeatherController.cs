using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WeatherApi.Models;
using WeatherApi.Services.Interfaces;

namespace WeatherApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet]
        public async Task<ActionResult<WeatherData>> GetWeather()
        {
            var weatherData = await _weatherService.GetWeatherDataAsync();
            if (weatherData == null)
            {
                return NotFound();
            }
            return Ok(weatherData);
        }
    }
}