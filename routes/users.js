const express = require('express');
const router = express.Router();
const loginRecord = require('../app/record/userLogin.js');
const conf = require('../app/conf/sql.json');
const userInfoFormat = require('../app/format/userInfo.js');
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
    port:3306
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });
  con.query(conf.userInfo,[req.query.gameId],function (error, results) {
    if (error || results.length>=2 || results.length==0) throw error; 
    userInfoFormat.gameId=results[0].GAME_ID;
    userInfoFormat.userName=results[0].USER_NAME;
    userInfoFormat.inGameMoney=results[0].IN_GAME_MONEY;
    userInfoFormat.stones=results[0].STONE;
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(userInfoFormat);
    console.log("user info data finish");
    loginRecord.insert(userInfoFormat.gameId);
  });
});


module.exports = router;
