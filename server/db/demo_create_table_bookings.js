var mysql = require('mysql');

var con = mysql.createConnection({
	host: localhost,
	database: JPL
});

con.connect(fuction(err) {
	if (err) throw err;
	console.log("Connected to JPL");

	var sql = "CREATE TABLE bookings(id INT AUTO_INCEREMENT PRIMARY_KEY, date DATETIME, time DATETIME, email VARCHAR(255), rego VARCHAR(255))";

	con.quey(sql, function (err, result) {
		if (err) throw err;
		console.log("Created Table Bookings");
	});
});