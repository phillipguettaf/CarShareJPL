var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
});

 con.connect(function(err) {
	if (err) throw err;
	console.log("MySQL Connected");
	con.query("CREATE DATABASE JPL", function (err, result) {
		if (err) throw err;
		console.log("Database created");
	});
}); 