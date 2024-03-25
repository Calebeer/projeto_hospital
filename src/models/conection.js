const mysql = require('mysql2/promise');
require('dotenv').config()

//AQUI ESTÁ SENDO FEITA A CONEXÃO COM O BANCO(ESTÁ SENDO USADO O MYSQL)
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.MYSQL_DB,

})

module.exports = connection;
