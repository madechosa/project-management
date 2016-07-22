var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'html'); //extension of views
app.use(bodyParser.urlencoded({ extended: false }));

var pool = mysql.createPool({
    connectionLimit : 100, //focus it
    host : '10.164.37.53',
    user : 'training',
    password : 'training',
    database : 'training'
    
    
});
router.get('/:id', function(req, res, next) {

	var connection = mysql.createConnection({
		host: '10.164.37.53',
		database:'training',
		user: 'training',
		password:'training'
	});
	
	console.log('MySQL Connection Status : '+connection);
	
	  connection.query('SELECT * FROM basic_information where empid = ' + req.params.id ,function(err,rows,fields){
		  console.log('Connection Result Error : '+ err);
		  console.log('No of Records : '+rows.length);
		connection.end();
	  
		res.send(rows);
		
	  });
});

app.post('/insert', function(req,res){
    
   pool.getConnection(function(error,conn){
       
       var queryString = "insert into basic_information(EMPID,FIRSTNAME,MIDDLENAME,LASTNAME,ADDRESS,EMAIL,NICKNAME,CONTACTNUMBER,DEPARTMENT,OFFICE_LOCATION) values('"+req.body.empid+"','"+req.body.fname+"','"+req.body.mname+"','"+req.body.lname+"','"+req.body.homeadd+"','"+req.body.email+"','"+req.body.nname+"','"+req.body.contact+"','"+req.body.dept+"','"+req.body.officeloc+"')";
       
       conn.query(queryString,function(error,results){
           if(error)
               {
                   throw error;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
           
       });
       conn.release();
   });
    
    
});

function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.setHeader('Content-Type','application/json');
			response.writeHead(200,{'Content-Type':'application/json'});
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error');
		}
		if(data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		}
	});
}

module.exports = router;