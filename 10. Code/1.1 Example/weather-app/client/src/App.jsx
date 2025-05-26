import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import './styles/App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('/api/weather'); // Adjust the API endpoint as needed
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

        fetchWeather();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Handle error state  
    function handleError() {
        if (error) {
            return <div>Error: {error}</div>;
        }
    }
    // Handle loading state
    function handleLoading() {
        if (loading) {
            return <div>Loading...</div>;
        }
    }

    //handle weater data
    function handleWeatherData() {
        if (weatherData) {
            return (
                <WeatherCard
                    temperature={weatherData.temperature}
                    condition={weatherData.condition}
                    location={weatherData.location}
                />
            );
        }
    }

    //handle weather data

    //handle data
    function handleData() {
        if (weatherData) {
            return (
                <WeatherCard
                    temperature={weatherData.temperature}
                    condition={weatherData.condition}
                    location={weatherData.location}
                />
            );
        }
    }

    // handle  api response
    function handleApiResponse() {
        if (weatherData) {
            return (
                <WeatherCard
                    temperature={weatherData.temperature}
                    condition={weatherData.condition}
                    location={weatherData.location}
                />
            );
        }
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
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