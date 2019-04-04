var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");
	
	//Select all of Phill's bookings
	con.query("SELECT * FROM bookings WHERE email IN (SELECT email FROM users WHERE firstname = 'Phill')", function (err, result, fields) {
	console.log(result);
  });
});