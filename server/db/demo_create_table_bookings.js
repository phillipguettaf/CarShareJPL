var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	database: "JPL",
	user: "root",
	password: "admin"
});

 con.connect(function(err) {
	console.log("Connected to JPL");

 	var sql = "CREATE TABLE bookings(id INT AUTO_INCEREMENT PRIMARY_KEY, date DATETIME, time DATETIME, email VARCHAR(255), rego VARCHAR(255))";

 	con.query(sql, function (err, result) {
		console.log("Created Table Bookings");
	});
}); 