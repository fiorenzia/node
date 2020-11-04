const express = require('express');
const router = express.Router();
const mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {
 
  let dwhJson = {
    gameId:'',
    totalLogin:'',
    userName:'',
    author:'',
    lastLoginTime:'',
    creationTime:'',
    updateTime:''
  }

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
  
  const id = req.query.gameId;
  const sql = 'SELECT * FROM t_user_info where game_id = ' + id;

  con.query(sql,function (error, results) {
    if (error) throw error; 
    resultJson.gameId=results[0].GAME_ID;
    resultJson.userName=results[0].USER_NAME;
    resultJson.inGameMoney=results[0].IN_GAME_MONEY;
    resultJson.stones=results[0].STONE;
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(resultJson);

  });
});


module.exports = router;
