const express = require('express');
const taskController = require('./controlers/tasksController')
const router = express.Router();

router.get('/paciente', taskController.getAll)

module.exports = router;
