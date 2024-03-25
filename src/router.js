const express = require('express');
const taskController = require('./controlers/tasksController')
const router = express.Router();

//AQUI VÃO SER SETADO AS ROTAS
router.get('/paciente', taskController.getAll)
router.post('/paciente',taskController.createPacient)


module.exports = router;
