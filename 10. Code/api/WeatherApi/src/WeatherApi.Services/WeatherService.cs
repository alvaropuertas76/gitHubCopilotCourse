using System.Threading.Tasks;
using WeatherApi.Services.Interfaces;
using WeatherApi.DAL.Interfaces;
using WeatherApi.Models;

namespace WeatherApi.Services
{
    public class WeatherService : IWeatherService
    {
        private readonly IWeatherRepository _weatherRepository;

        public WeatherService(IWeatherRepository weatherRepository)
        {
            _weatherRepository = weatherRepository;
        }

        public async Task<WeatherData> GetWeatherDataAsync()
        {
            return await _weatherRepository.GetWeatherData();
        }
    }
}