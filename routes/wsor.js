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

/*
function Project(id, name) {
	this.id = id;
	this.name = name;
}
*/

router.get('/register', function(req, res, next) {
  res.send("Hello GET register");
});

router.post('/register', function(req, res) {
	console.log('yyyyyyyyy');
	
	var objConn = createConn();
    objConn.query('UPDATE basic_information SET nickname = ?, password = ?, active_flag = ? WHERE empid = ? and active_flag = ?', [req.body.nickname, req.body.password, 'Y', req.body.emp_id, 'A'], function(error, rows) {
        if (error) {
            console.log(error.message);
            res.end(error.message);
        } else {
            if (rows.changedRows > 0) {
                console.log('success');
                res.end('Hi ' + req.body.nickname + '!! You have successfully registered.');
            } else {
                var post = {
                    empid: req.body.emp_id,
                    email: req.body.mail,
					firstname: req.body.firstname,
					lastname: req.body.lastname,
                    nickname: req.body.nickname,
                    password: req.body.password,
					usertype: 0,
                    active_flag: 'N',
                    };

                objConn.query('INSERT INTO basic_information SET ?', post, function(error) {
                    if (error) {
                        console.log(error.message);
                        res.end(error.message);
                    } else {
                        console.log('success');
                        res.end('Hi ' + req.body.nickname + '!! You have now partially created your account.\nAdmin has been notified.');
                    }
                });
            }
        }
    });
	
	res.send("Hello POST register");
});

module.exports = router;
