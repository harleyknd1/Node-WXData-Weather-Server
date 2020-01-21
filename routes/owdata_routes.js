const express = require('express');
const routes = express.Router();
const wxcontroller = require('../controllers/owdata.controller');


//default routes
routes.get('/weather/local/:parameters', wxcontroller.getWeatherData);

// Export the routes
module.exports = routes;