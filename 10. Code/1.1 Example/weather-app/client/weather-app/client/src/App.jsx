import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherInput from './components/WeatherInput';
import './styles/App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeather = async (location) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/weather?location=${location}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather('default location'); // Fetch weather for a default location on initial load
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <WeatherInput onFetchWeather={fetchWeather} />
            {weatherData && (
                <WeatherCard
                    temperature={weatherData.temperature}
                    condition={weatherData.condition}
                    location={weatherData.location}
                />
            )}
        </div>
    );
};

export default App;