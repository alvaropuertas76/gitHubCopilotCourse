using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WeatherApi.DAL.Interfaces;
using WeatherApi.Models;

namespace WeatherApi.DAL
{
    public class WeatherRepository : IWeatherRepository
    {
        private readonly WeatherDbContext _context;

        public WeatherRepository(WeatherDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<WeatherData>> GetWeatherDataAsync()
        {
            return await _context.WeatherData.ToListAsync();
        }

        public async Task<WeatherData> GetWeatherDataByIdAsync(int id)
        {
            return await _context.WeatherData.FindAsync(id);
        }

        public async Task AddWeatherDataAsync(WeatherData weatherData)
        {
            await _context.WeatherData.AddAsync(weatherData);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateWeatherDataAsync(WeatherData weatherData)
        {
            _context.WeatherData.Update(weatherData);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteWeatherDataAsync(int id)
        {
            var weatherData = await _context.WeatherData.FindAsync(id);
            if (weatherData != null)
            {
                _context.WeatherData.Remove(weatherData);
                await _context.SaveChangesAsync();
            }
        }
    }
}