const mysql=require("mysql")
const dotenv=require("dotenv").config()

var connection  = mysql.createConnection({
    connectionLimit : process.env.MYSQL_CONNECTIONLIMIT,
    host            : process.env.MYSQL_HOST,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
  });

  module.exports=connection