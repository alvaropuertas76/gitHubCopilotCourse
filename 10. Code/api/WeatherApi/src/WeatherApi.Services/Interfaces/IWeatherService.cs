namespace WeatherApi.Services.Interfaces
{
    public interface IWeatherService
    {
        Task<WeatherData> GetWeatherDataAsync(string location);
    }
}