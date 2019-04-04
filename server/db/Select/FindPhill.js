var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");
	
	//Select all data for users named Phill
	con.query("SELECT * FROM users WHERE lastame = 'Phill'", function (err, result, fields) {
	console.log(result);
  });
});