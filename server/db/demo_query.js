var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	database: "JPL",
	user: "root",
	password: "admin"
});

 con.connect(function(err) {
	console.log("Connected to JPL");

 	var select = "SELECT * FROM users";
 	con.query(select, function (err, result, fields) {
 	console.log(result);
 	});
}); 