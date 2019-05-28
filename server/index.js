const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql = require('mysql');
const cors = require("cors");

// Make connection to SQL server
var connection = mysql.createConnection({
	host     : '35.201.23.41',
	user     : 'root',
	password : 'abc..123', // TODO: Fix lol
	database : 'JPL'
});
connection.connect();



// Port for the API server
const serverPort = 8080;

// API Default routes
const routes = {
	default: {
		get: "/test"
	}
};

// Use CORS with express
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(cors());
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


// function for getting a list of cars
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

// To get previous bookings
app.post("/getpreviousbookings", function(req, res) {
    
    var getPreviousBookings = "SELECT * FROM bookings INNER JOIN cars ON bookings.rego=cars.rego WHERE bookings.email = '" + req.body.user
    + "'";
    
    connection.query(getPreviousBookings, function(error, results, fields) {
        if (error) throw error;
       // console.log("Previous bookings fetched: ", results[0].rego);
        res.json(results);
    });
});

// To submit a booking
app.post("/submitbooking", function(req, res) {

	var insert = "INSERT INTO bookings(start, end, email, rego)"
    + " VALUES ("
	+ "CURRENT_TIMESTAMP(),"
	+ "CURRENT_TIMESTAMP(),'"
	+ req.body.user + "','"
	+ req.body.car.rego 
    + "')";

	connection.query(insert, function (error, results, fields) {
        // Insert the booking
        if (error) throw error;
        var getID =  "SELECT LAST_INSERT_ID() as id FROM bookings";
        connection.query(getID, function (error, results, fields) {
            // Get the booking's id
            var id = results[0].id;
            console.log("ID: ", id);
            var getBooking = "SELECT * FROM bookings WHERE id = " + id;
            connection.query(getBooking, function(error, results, fields) {
                console.log('Booking submitted: number ', results[0].id);
                // return booking to React
                res.json(results);
            });
        });
    });
});

app.post("/returncar", function(req, res) {
    
    connection.query("START TRANSACTION", function(error, results, fields) {
        var updateBooking = "UPDATE bookings SET end = CURRENT_TIMESTAMP() WHERE id = '"
        + req.body.id + "'"
        connection.query(updateBooking, function(error, results, fields) {
            connection.query("COMMIT", function(error, results, fields) {
                console.log("Booking updated");
                res.json({message: "Booking updated"});
            });
        });
    });
});

app.post("/addcar", function(req, res) {
	console.log('Car Added');
		/*
	 * Delete second "insert" to run completely
	 * Currently returns an error: no 'start'
	*/

	var insert = "INSERT INTO cars(rego, make, model, year, latitude, longitude) VALUES ('"
	+ req.body.rego + "','"
	+ req.body.make + "','"
	+ req.body.model + "','"
	+ req.body.year + "','"
	+ req.body.latitude + "','"
	+ req.body.longitude
	+ "');";

//	var insert = "select tab.table_schema as database_schema, tab.table_name as table_name, col.ordinal_position as column_id, col.column_name as column_name, col.data_type as data_type, case when col.numeric_precision is not null then col.numeric_precision else col.character_maximum_length end as max_length, case when col.datetime_precision is not null then col.datetime_precision when col.numeric_scale is not null then col.numeric_scale else 0 end as 'precision' from information_schema.tables as tab inner join information_schema.columns as col on col.table_schema = tab.table_schema and col.table_name = tab.table_name where tab.table_type = 'BASE TABLE' and tab.table_schema not in ('information_schema','mysql', 'performance_schema','sys') and tab.table_schema = 'JPL' order by tab.table_name, col.ordinal_position;"

	connection.query(insert, function (error, results, fields) {

		if (error) throw error;

		// Test output to console
		console.log('Booking submitted ', results);

		// Dump array of rows to React
		res.json({message: "Car booked"});

	});
});


// Listen on server port
app.listen(serverPort);
console.log(`[Server] API Server running on port: ${serverPort}.`);

//connection.end();
