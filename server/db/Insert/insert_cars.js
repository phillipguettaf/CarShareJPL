var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('ABC123', 'Mazda', '121', 1993, 152.124, 63.134)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('DEF456', 'Ford', 'Falcon', 2013, 42.913, 101.201)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('GHI789', 'Toyota', 'Sprinter', 1986, 100.20, 936.883)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('JKL123', 'Ford', 'Focus', 2012, 472.183, 101.447)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('MNO456', 'Hyandai', 'Getz', 2008, 194.24, 80.232)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('PQR789', 'Toyota', 'Hilux', 2018, 101.577, 70.23)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('STU789', 'Holden', 'Colorado', 1986, 100.20, 936.883)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('VWX123', 'Mazda', '3', 2012, 100.52, 99.193)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('YZA456', 'Audi', 'R8', 2018, 101.29, 42.26)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('BCD789', 'Reliant', 'Robin', 1976, 101.20, 69.420)";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
});