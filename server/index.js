const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql = require('mysql');
const cors = require("cors");

// Make connection to SQL server
var connection = mysql.createConnection({
	host     : '35.244.83.224',
	user     : 'root',
	password : 'abc..123', // TODO: Fix lol
	database : 'JPL'
});
connection.connect();



// Port for the API server
const serverPort = 8001;

// API Default routes
const routes = {
	default: {
		get: "/test"
	}
};

// Use CORS with express
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(cors())
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true
	})
);

// Test ENGLISH
app.post("/test", function(req, res) {
	console.log(req.body);
	res.json({ test: "Test response" });
});

// Register placeholder function
app.post('/register', function (req, res) {
	console.log('API Called for Registration');

	// You can get the JSON data you posted over from React with 
	// req.body
	// e.g. let data = req.body;
	// and you can set your response with JSON with
	// res.json
	
});

// Login placeholder function
app.post('/login', function (req, res) {
	console.log('API Called for Login');
});


// Placeholder function for getting a list of cars
app.post("/getcars", function(req, res) {
	console.log('API Called for cars list');


	// Get list of cars from SQL server 
	connection.query('SELECT rego, make, model, year, latitude, longitude FROM cars', function (error, results, fields) {
		
		if (error) throw error;

		// Test output to console
		console.log('Got cars from SQL server, test model: ', results[0].model);
			
		// Dump array of rows to React
		res.json(results);

	});
});

app.post("/submitbooking", function(req, res) {
	console.log('Booking submitted: ');
	//	Need the user logged in to save booking data
	// var insert = "INSERT INTO bookings(id, start, end, email, rego) VALUES ('" 
	// + new Date() + "','"
	// + " ','"
	// + res.body.user.email + "','"
	// + res.body.car.rego 
	// + "'') COMMIT;"
	res.json({message: "Booking made."});
});


// Listen on server port
app.listen(serverPort);
console.log(`[Server] API Server running on port: ${serverPort}.`);


//connection.end();
