class WeatherController {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    async getWeather(req, res) {
        const { city } = req.params;
        try {
            const response = await fetch(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            res.status(200).json({
                location: data.name,
                temperature: data.main.temp,
                condition: data.weather[0].description,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default WeatherController;