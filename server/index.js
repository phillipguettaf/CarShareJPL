const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

// Port for the API server
const serverPort = 8001;

// API Default routes
const routes = {
	default: {
		get: "/test"
	}
};

// Use CORS with express
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
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

	// Make SQL request here etc...
});


// Listen on server port
app.listen(serverPort);
console.log(`[Server] API Server running on port: ${serverPort}.`);
