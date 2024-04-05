const express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())
const router = require('./router')


app.use(express.json())
app.use(router)

module.exports = app;
