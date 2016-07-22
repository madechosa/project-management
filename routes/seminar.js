var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/*
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
*/
function createConn() {
    var connection = mysql.createConnection({
        user: 'training',
        password: 'training',
        host: '10.164.37.53',
        port: 3306,
        database: 'training'
    });
    return connection;
}


router.post('/seminar', function(sem,res){

	console.log("seminar here");
	var objConn = createConn();
	console.log("obj conn");
               var jen = {
                    empid: req.body.emp_id,
                    sdate: req.body.seminarDate,
					training_description: req.body.seminarTrainings,
                    };
				console.log("Connecting...");
                objConn.query('INSERT INTO seminar_trainings SET ?', jen, function(error) {
					console.log("In Query");
                    if (error) {
                        console.log(error.message);
                        res.end(error.message);
                    } else {
                        console.log('success');
                    }
                });
            
      console.log("End");  
    });


module.exports = router;
