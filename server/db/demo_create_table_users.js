var mysql = require('mysql');

 var con = mysql.createConnection({
	host: localhost,
	database: JPL
});

 con.connect(fuction(err) {
	if (err) throw err;
	console.log("Connected to JPL");

 	var sql = "CREATE TABLE users(email VARCHAR(255) PRIMARY_KEY, firstname VARCHAR(255), surname VARCHAR(255), age INT, longitude FLOAT, latitude FLOAT, licencenumber VARCHAR(255))";

 	con.quey(sql, function (err, result) {
		if (err) throw err;
		console.log("Created Table Users");
	});
}); 