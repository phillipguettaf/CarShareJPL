var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	database: "JPL",
	user: "root",
	password: "admin"
});

 con.connect(function(err) {
	console.log("Connected to JPL");

 	var sql = "CREATE TABLE cars(rego VARCHAR(255) PRIMARY_KEY, make VARCHAR(255), model VARCHAR(255), year INT, longitude FLOAT, latitude FLOAT)";

 	con.query(sql, function (err, result) {
		console.log("Created Table Cars");
	});
}); 