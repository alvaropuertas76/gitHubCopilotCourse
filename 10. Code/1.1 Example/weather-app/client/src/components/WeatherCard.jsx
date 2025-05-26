import React from 'react';

const WeatherCard = ({ temperature, condition, location }) => {
    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <p>{condition}</p>
            <p>{temperature}°C</p>
        </div>
    );
};

export default WeatherCard;