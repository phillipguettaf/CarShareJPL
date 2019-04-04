var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "JPL"
});

con.connect(function(err) {
	console.log("Connected to JPL");
	
	//Select coords for all Fords
	con.query("SELECT longitude, latitude FROM cars WHERE make = 'Ford'", function (err, result, fields) {
	console.log(result);
  });
});