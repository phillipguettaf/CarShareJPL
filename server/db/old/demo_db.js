var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "admin"
});

con.connect(function(err) {
	console.log("MySQL Connected");
	con.query("CREATE DATABASE JPL", function (err, result) {
		console.log("Database created");
	});
});

var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "admin",
	database: "JPL"
});

db.connect(function(err) {
	console.log("Connected to database JPL");
	var sql = "CREATE TABLE users(email VARCHAR(255) PRIMARY_KEY, firstname VARCHAR(255), lastname VARCHAR(255), age INT, longitude FLOAT, latitude FLOAT, licencenumber VARCHAR(255))";

 	db.query(sql, function (err, result) {
		console.log("Created Table Users");
	});

	var insert = "INSERT INTO users(email, firstname, lastname, age, longitude, latitude, licencenumber) VALUES ('phill.blake7@gmail.com', 'Phill', 'Guettaf', '23', '144.101', '37.5', 'M7901234')";
 	db.query(insert, function (err, result) {	
 		console.log("1 record inserted");
	});

	var select = "SELECT * FROM users";
 	con.query(select, function (err, result, fields) {
 		console.log(result);
 	});
});

con.end();
db.end();
