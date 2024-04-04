const express = require('express');
const taskController = require('./controlers/tasksController')
const router = express.Router();
const pacientMiddlewares = require('../src/middlewares/pacientMiddleware')
// const doctorMiddlewares = require('../src/middlewares/doctorMiddlewares')

//AQUI VÃO SER SETADO AS ROTAS
router.get('/pacient', taskController.getAllPacient)
router.post('/pacient',pacientMiddlewares.validationBody, taskController.createPacient)
router.get('/doctor',taskController.getAllDoctor)
router.post('/consulta',taskController.createMedicalAppointment)
router.delete('/consulta/:id',taskController.deleteConsult)

module.exports = router;
