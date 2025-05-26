using Microsoft.EntityFrameworkCore;

namespace WeatherApi.DAL
{
    public class WeatherDbContext : DbContext
    {
        public WeatherDbContext(DbContextOptions<WeatherDbContext> options) : base(options)
        {
        }

        public DbSet<WeatherData> WeatherData { get; set; }
    }
}