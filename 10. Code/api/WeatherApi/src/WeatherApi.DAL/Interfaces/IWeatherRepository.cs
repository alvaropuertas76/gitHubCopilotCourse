namespace WeatherApi.DAL.Interfaces

{
    public interface IWeatherRepository
    {
        Task<WeatherData> GetWeatherDataAsync();
    }
}