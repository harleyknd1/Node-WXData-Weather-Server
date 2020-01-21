const ApiError = require('../objects/ApiError')
const assert = require('assert')

module.exports = {
    /**
     * Returns the weather XML data based on the parameter ID
     * @param {*} req The incomming request
     * @param {*} res The response object
     * @param {*} next 
     */
    getWeatherData(req, res, next){

        //the weather ID
        let parameters = req.params.parameters;
        //any other parameters send alongside the ID
        let queryParameters = req.query;
        console.log(parameters);
        console.log(queryParameters);

        //Respond with an XML file
        res.type('application/xml');
        //Get the XML file from the xml_data folder
        //TODO: parse the query parameters correctly before reuturning the XML File
        //TODO: sanatize the parameters input properly.
        res.sendFile('./xml_data/weather.'+parameters+'.xml',{ root: __dirname });
    }
}