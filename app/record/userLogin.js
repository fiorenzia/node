const dateUtil = require('date-utils');
const conf = require('../conf/sql.json');
const userAuditdb = require('../db/userAuditDb');

exports.insert=function(gameId){
    console.log("LoginRecord >--begin-->")
    const date = new Date();
    const formatted = date.toFormat("YYYYMMDDHH24MISS");
    console.log(formatted);
    console.log(gameId);
    userAuditdb.query(conf.loginRecordSql,[gameId,formatted],function (error, results) {
        if (error) throw error; 
        console.log("LoginRecord <--finish--< ");
      });
}


