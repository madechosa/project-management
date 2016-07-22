var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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

router.get('/', function(req, res, next) {
  res.send("Hello GET init");
});

router.get('/login', function(req, res) {
	
	var objConn = createConn();
    console.log(req.query.emp_id);
	console.log(req.query.password);
	objConn.query('SELECT firstname, empid FROM basic_information where empid = ? AND password = ? AND active_flag = ?', [req.query.emp_id, req.query.password, 'Y'], function(error, rows) {
		
		console.log(rows.length);

        var data = {
            result: '',
            firstname: '',
            emp_id: ''
        };
		
        if (rows.length > 0) {
            console.log('success');
            data.result = '0';
            data.firstname = rows[0].firstname;
            data.emp_id = rows[0].empid;
            res.send(data);
        } else {
            console.log('fail');
            res.send('1');
        }
    });
	
});

module.exports = router;
