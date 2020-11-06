const mysql = require('mysql');
const dateUtil = require('date-utils');
const conf = require('../conf/sql.json');


exports.insert=function(gameId){

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'user_audit',
    port:3306
  });

    console.log("LoginRecord >--begin-->")
    const date = new Date();
    const formatted = date.toFormat("YYYYMMDDHH24MISS");
    console.log(formatted);
    console.log(gameId);
    con.query(conf.loginRecordSql,[gameId,formatted],function (error, results) {
        if (error) throw error; 
        console.log("LoginRecord <--finish--< ");
      });
}


