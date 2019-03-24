var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");

	var sql = "CREATE TABLE licences(licencenumber VARCHAR(255) PRIMARY_KEY, licencetype VARCHAR(10), state VARCHAR(3))";

	con.query(sql, function (err, result) {
		console.log("Created Table Licences");
	});
});