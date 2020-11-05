const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const loginRecord = require('../app/record/userLogin.js');
const conf = require('../app/conf/sql.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {
 
  let resultJson={
    gameId:'',
    userName:'',
    inGameMoney:'',
    stones:''
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
  
  con.query(conf.userInfo,[req.query.gameId],function (error, results) {
    if (error) throw error; 
    resultJson.gameId=results[0].GAME_ID;
    resultJson.userName=results[0].USER_NAME;
    resultJson.inGameMoney=results[0].IN_GAME_MONEY;
    resultJson.stones=results[0].STONE;
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(resultJson);
    console.log("user info data finish");
    loginRecord.insert(resultJson.gameId);
  });
});


module.exports = router;
