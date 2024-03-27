const mysql = require('mysql2/promise');

// HERE I AM CALLING THIS REQUIRE FOR I USE ON CONNECTION
require('dotenv').config()

//HERE BEGIN MADE THE  CONECTION WITH THE BD(IS BEGIN USED THE MYSQL)
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.MYSQL_DB,
})

module.exports = connection;
