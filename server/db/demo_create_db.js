var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
});

 con.connect(function(err) {
	console.log("MySQL Connected");
	con.query("CREATE DATABASE JPL", function (err, result) {
		console.log("Database created");
	});
}); 