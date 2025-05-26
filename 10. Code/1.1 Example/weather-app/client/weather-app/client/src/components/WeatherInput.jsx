import React, { useState } from 'react';

const WeatherInput = ({ onFetchWeather }) => {
    const [location, setLocation] = useState('');

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (location) {
            onFetchWeather(location);
            setLocation('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={location}
                onChange={handleInputChange}
                placeholder="Enter location"
                required
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherInput;