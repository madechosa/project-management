var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function Project(id, name) {
	this.id = id;
	this.name = name;
}

router.get('/', function(req, res, next) {
  res.send("Hello Projects");
});


/*router.get('/:id', function(req, res, next) {
=======
router.get('basicInfo/:id', function(req, res, next) {
>>>>>>> aaf1fb947ded2890ca8e04b57afafa64e2b892de
	var sql = 'SELECT id, name FROM project WHERE id = ' + req.params.id;

	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

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
*/

router.post('/basic', function(req,res){

	console.log("basic here");
	
	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

	console.log("Connecting...");
	connection.connect();  
	
	console.log("Execute query");
	   console.log("Request:", req.body);
	var queryString = "insert into basic_information(USERTYPE,PASSWORD,EMPID,FIRSTNAME,MIDDLENAME,LASTNAME,ADDRESS,EMAIL,NICKNAME,CONTACTNUMBER,DEPARTMENT,OFFICE_LOCATION) values('0','1234','"+req.body.empid+"','"+req.body.fname+"','"+req.body.mname+"','"+req.body.lname+"','"+req.body.homeadd+"','"+req.body.email+"','"+req.body.nname+"','"+req.body.contact+"','"+req.body.dept+"','"+req.body.officeloc+"')";
	
	   console.log("Query: " + queryString);
	   
   connection.query(queryString, function(err, rows){
           if(err)
               {
					console.log("Error:" + err);
                   throw err;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
 
   });
});


router.post('/seminar', function(req,res){

	console.log("seminar here");
	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

	console.log("Connecting...");
	connection.connect();  
	
	console.log("Execute query");
	   console.log("Request:", req.body);
	var queryString = "insert into seminar_trainings(EMPID,SDATE,TRAINING_DESCRIPTION) values('"+req.body.empid+"','"+req.body.seminarDate+"','"+req.body.seminarTrainings+"')";
	
	   console.log("Query: " + queryString);
	   
   connection.query(queryString, function(err, rows){
           if(err)
               {
					console.log("Error:" + err);
                   throw err;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
 
   });
});



router.post('/career', function(req,res){
    
 	console.log("seminar here");
	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

	console.log("Connecting...");
	connection.connect();  
	
	console.log("Execute query");
	   console.log("Request:", req.body);
	var queryString = "insert into career_synopsis(EMPID,SDATE,COMPANY,CURRENTPOSITION) values('"+req.body.empid+"','"+req.body.date+"','"+req.body.company+"','"+req.body.position+"')";
	
	   console.log("Query: " + queryString);
	   
   connection.query(queryString, function(err, rows){
           if(err)
               {
					console.log("Error:" + err);
                   throw err;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
 
   });
});


router.post('/experience', function(req,res){

	console.log("experience here");
	
	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});

	console.log("Connecting...");
	connection.connect();  
	
	console.log("Execute query");
	   console.log("Request:", req.body);
	var queryString = "insert into proj_experience(EMPID,PROJECTNAME, CLIENTNAME,DURATION,DESCRIPTION,ROLE,RESPONSIBILITIES, PLATFORM) values('"+req.body.empid+"','"+req.body.project+"','"+req.body.client+"','"+req.body.duration+"','"+req.body.desc+"','"+req.body.role+"','"+req.body.projresp+"','"+req.body.platform+"')";
	
	   console.log("Query: " + queryString);
	   
   connection.query(queryString, function(err, rows){
           if(err)
               {
					console.log("Error:" + err);
                   throw err;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
 
   });
});

module.exports = router;
