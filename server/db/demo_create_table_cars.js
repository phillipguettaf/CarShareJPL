var mysql = require('mysql');

var con = mysql.createConnection({
	host: localhost,
	database: JPL
});

con.connect(fuction(err) {
	if (err) throw err;
	console.log("Connected to JPL");

	var sql = "CREATE TABLE cars(rego VARCHAR(255) PRIMARY_KEY, make VARCHAR(255), model VARCHAR(255), year INT, longitude FLOAT, latitude FLOAT)";

	con.quey(sql, function (err, result) {
		if (err) throw err;
		console.log("Created Table Cars");
	});
});