const express = require('express');
const routes = express.Router();

routes.get('/', function (req, res) {
    res.status(401);
    res.json({
        "description": "Please read the documentation before proceeding"
    });
});



// Export the routes
module.exports = routes;
