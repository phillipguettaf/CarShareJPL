var mysql = require('mysql');

 var con = mysql.createConnection({
	host: "localhost",
	database: "JPL"
});

 con.connect(function(err) {
	console.log("Connected to JPL");
	var insert = "INSERT INTO users(email, firstname, lastname, age, longitude, latitude, licencenumber) VALUES ('phill.blake7@gmail.com', 'Phill', 'Guettaf', '23', '144.101', '37.5', 'M7901234')";
 	con.query(insert, function (err, result) {	
 		console.log("1 record inserted");
 	});
}); 