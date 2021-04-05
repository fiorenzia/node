const dateUtil = require('date-utils');
const conf = require('../conf/sql.json');
const gamedb = require('../db/gameDb.js')

exports.update=function(gameId,totalLogin){
    console.log("");
    console.log("LoginRecord-Update-totalLogin-increment >-- begin --> ")
    const date = new Date();
    const formatted = date.toFormat("YYYYMMDDHH24MISS");
    console.log(formatted);
    console.log(totalLogin);
    console.log(gameId);
    gamedb.query(conf.loginIncrement,[totalLogin,gameId],function (error, results) {
        if (error) throw error; 
        console.log("TotalLogin-increment <--finish--< ");
      });
  }
  