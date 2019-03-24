var mysql = require('mysql');

var con = mysql.createConnection({
	host: localhost,
	database: JPL
});

con.connect(fuction(err) {
	if (err) throw err;
	console.log("Connected to JPL");

	var sql = "CREATE TABLE licences(licencenumber VARCHAR(255) PRIMARY_KEY, licencetype VARCHAR(10), state VARCHAR(3))";

	con.quey(sql, function (err, result) {
		if (err) throw err;
		console.log("Created Table Licences");
	});
});