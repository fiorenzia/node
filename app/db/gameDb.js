const mysql=require('mysql');


let gameDbConfig={
    host: 'localhost',
    user: 'root',
    password: '',
    database:'game',
    port:3306
  };

let gameDbConnection;

function handleDisconnectGameDb() {
    console.log('create mysql connection');
　　 //接続準備mysqlのcreateconnection呼び出して変数へ格納
    gameDbConnection = mysql.createConnection(gameDbConfig); 

    //接続　上記で変数からConnect呼び出し
    gameDbConnection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); //2秒待ってから処理
        }
    });

    //error時の処理
    gameDbConnection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnectGameDb();
        } else {
            throw err;
        }
    });

    module.exports = gameDbConnection; //connectionを(他のファイルから)requireで呼び出せるようにする
}

handleDisconnectGameDb();
