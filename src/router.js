const express = require('express');
const taskController = require('./controlers/tasksController')
const router = express.Router();
const pacientMiddlewares = require('../src/middlewares/pacientMiddleware')

//AQUI VÃO SER SETADO AS ROTAS
router.get('/paciente', taskController.getAll)
router.post('/paciente',pacientMiddlewares.validationBody, taskController.createPacient)


module.exports = router;
