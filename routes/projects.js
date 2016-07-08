var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '10.164.37.53',
	database:'training',
	user: 'training',
	password:'training'
});

function Project(id, name) {
	this.id = id;
	this.name = name;
}

router.get('/', function(req, res, next) {
  res.send("Hello Projects");
});

router.get('/:id', function(req, res, next) {
	var sql = 'SELECT id, name FROM test WHERE id = ' + req.params.id;
	
	connection.connect();
	
	connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
		
		var projects = [];
		for (var i = 0; i < rows.length; i++) {
			var project = new Project(rows[i].id, rows[i].name);
			console.log(project);
			projects.push(project);
			console.log("Inside loop", projects);
		}
		connection.end();
		console.log("Outside loop", projects);
		res.send(projects);
	});
	
});

module.exports = router;
