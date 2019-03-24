var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	database: "JPL"
});

 con.connect(function(err) {
	console.log("Connected to JPL");

 	var sql = "CREATE TABLE users(email VARCHAR(255) PRIMARY_KEY, firstname VARCHAR(255), lastname VARCHAR(255), age INT, longitude FLOAT, latitude FLOAT, licencenumber VARCHAR(255))";

 	con.query(sql, function (err, result) {
		console.log("Created Table Users");
	});
}); 