const mysql = require('mysql2/promise');
require('dotenv').config()

console.log(process.env.MYSQL_PORT);
console.log(process.env.PORT);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.MYSQL_DB);


const connection = mysql.createPool({
    host: process.env.MYSQL_PORT,
    port: process.env.PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.MYSQL_DB,

})

module.exports = connection;
