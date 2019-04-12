var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('ABC123', 'Mazda', '121', 1993, -37.810235, 144.961445) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('DEF456', 'Ford', 'Falcon', 2013, -37.813571, 144.961770) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('GHI789', 'Toyota', 'Sprinter', 1986, -37.817564, 144.967344) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('JKL123', 'Ford', 'Focus', 2012, -37.817226, 144.953461) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('MNO456', 'Hyandai', 'Getz', 2008, -37.811963, 144.955515) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('PQR789', 'Toyota', 'Hilux', 2018, -37.811588, 144.972764) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('STU789', 'Holden', 'Colorado', 1986, -37.820573, 144.968004) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('VWX123', 'Mazda', '3', 2012, -37.814453, 144.938939) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('YZA456', 'Audi', 'R8', 2018, -37.808808, 144.955548) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
	
	var insert = "INSERT INTO cars(rego, make, model, year, longitude, latitude) VALUES ('BCD789', 'Reliant', 'Robin', 1976, -37.805286, 144.969145) COMMIT;";
 	con.query(insert, function (err, result) {	
 		console.log("record inserted");
 	});
});