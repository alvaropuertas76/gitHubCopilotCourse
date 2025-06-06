const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weatherRoutes');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});