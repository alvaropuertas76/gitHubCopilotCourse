import React from 'react';

const WeatherCard = ({ temperature, condition, location }) => {
    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Condition: {condition}</p>
        </div>
    );
};

export default WeatherCard;