const express = require('express');
const router = express.Router();
const mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {
 
  let resultJson = {
    gameId:'',
    totalLogin:'',
    userName:'',
    author:'',
    lastLoginTime:'',
    creationTime:'',
    updateTime:''
  }

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'game',
    port:3306
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });
  
  const id = req.query.gameId;
  const sql = 'SELECT * FROM t_user_info where game_id = ' + id;

  con.query(sql,function (error, results) {
    if (error) throw error; 
    resultJson.gameId=results[0].GAME_ID;
    resultJson.totalLogin=results[0].TOTAL_LOGIN;
    resultJson.userName=results[0].USER_NAME;
    resultJson.author= results[0].AUTHOR;
    resultJson.lastLoginTime=results[0].LAST_LOGIN_TIME;
    resultJson.creationTime=results[0].CREATION_TIME;
    resultJson.updateTime=results[0].UPDATE_TIME;
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(resultJson);
  });
});


module.exports = router;
