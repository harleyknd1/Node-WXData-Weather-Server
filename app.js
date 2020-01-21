const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./config/appconfig').logger;
const public_routes = require('./routes/public_routes');
const wxdata_routes = require('./routes/wxdata_routes');
const owdata_routes = require('./routes/owdata_routes');

let app = express();

const port = process.env.PORT || 3000;

// bodyParser parses the body from a request
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


// catch-all endpoint continue to next.
app.use('*', function(req, res, next){
	next();
});

//default endpoint routes
app.use('/api', public_routes);

//old WX routes, uses the old Weather ID system
app.use('/wxdata', wxdata_routes);
//new OW routes, returns the same data as WX, but uses the OW id system instead.
app.use('/owdata', owdata_routes);


//Handler if no endpoint matches
app.use('*', function (req, res, next) {
	//console.log(req);
	res.status(404) 
		.json({
			message: 'Endpoint not found.'
		})
		.end();
});

// Error handler, handles the errors, some codes however are in the incorrect formats. To.Do: Unify the error codes
app.use(function (error, req, res, next) {
	let statuscode = error.status;
	//Check if the initial status code recieved is proper, if not, try the code instead
	if (statuscode === undefined)
	{
		statuscode = error.code;
	}
	//If no status code could be found, return 500, should be fixed as well.
	if (!statuscode > 0)
	{
		statuscode = 500;
		console.log(error);
	}
	res.status(statuscode).json({
		message: error
	}).end();
});


app.listen(port, () => {
	console.log('Server running on port ' + port);
});

module.exports = app;
