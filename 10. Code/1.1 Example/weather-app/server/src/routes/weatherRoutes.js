const express = require('express');
const WeatherController = require('../controllers/weatherController');

const setWeatherRoutes = (app) => {
    const router = express.Router();
    const weatherController = new WeatherController();

    router.get('/weather/:location', weatherController.getWeatherData);

    app.use('/api', router);
};

module.exports = setWeatherRoutes;