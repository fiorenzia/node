const express = require('express');
const router = express.Router();
const gamedb = require('../app/db/gameDb.js')
const conf = require('../app/conf/sql.json');
const userInfoFormat = require('../app/format/userInfo.js');
const loginRecord = require('../app/record/userLogin.js');
const loginIncrement = require('../app/record/userTotalLoginIncrement.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {

  gamedb.query(conf.userInfo,[req.query.gameId],function (error, results) {
    if (error || results.length != 1) throw error;
    // Set to GameID 
    userInfoFormat.gameId=results[0].GAME_ID;
    // Set to UserName
    userInfoFormat.userName=results[0].USER_NAME;
    // Set to InGameMoney
    userInfoFormat.inGameMoney=results[0].IN_GAME_MONEY;
    // Set to Stone
    userInfoFormat.stones=results[0].STONE;
    // Set to Header
    res.header('Content-Type', 'application/json; charset=utf-8');
    // Send to Unity
    res.send(userInfoFormat);
    console.log("user info data finish");
    // Insert to UserAuditDB
    loginRecord.insert(userInfoFormat.gameId);
    // Update to GameDb
    loginIncrement.update(userInfoFormat.gameId,results[0].TOTAL_LOGIN+1);
  });

});


module.exports = router;
