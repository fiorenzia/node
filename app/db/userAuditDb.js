const mysql=require('mysql');


let userAuditDbConfig={
    host: 'localhost',
    user: 'root',
    password: '',
    database:'user_audit',
    port:3306
  };

let userAuditDbConnection;

function handleDisconnectUserAuditDb() {
    console.log('create mysql connection');
　　 //接続準備mysqlのcreateconnection呼び出して変数へ格納
    userAuditDbConnection = mysql.createConnection(userAuditDbConfig); 

    //接続　上記で変数からConnect呼び出し
    userAuditDbConnection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); //2秒待ってから処理
        }
    });

    //error時の処理
    userAuditDbConnection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnectUserAuditDb();
        } else {
            throw err;
        }
    });

    module.exports = userAuditDbConnection; //connectionを(他のファイルから)requireで呼び出せるようにする
}

handleDisconnectUserAuditDb();
