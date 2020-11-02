const express = require('express');
const router = express.Router();
const mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'game',
    // portは必須
    port:3306
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });
  req
  con.query('SELECT * FROM `t_user_info`', function (error, results, fields) {
    if (error) throw error; 
    console.log(results);
  });
  res.send('CALLED GET USER INFO SUCCESS! Im Node server!');
});


module.exports = router;
