const taskModel = require('../models/tasksModel')

// HERE WE GET THE PACIENTS
const getAllPacient = async (req, res)=>{
  const tasks = await taskModel.getAllPacient()
  return res.status(200).json(tasks)
}

const getAllDoctor = async (req, res)=>{
  const tasks = await taskModel.getAllDoctor()
  return res.status(200).json(tasks)
}

//HERE IS BEGIN CREATED THE PACIENT
const createPacient = async (req, res) => {
    const createdPacient = await taskModel.createPacient(req.body);
    return res.status(201).json(createdPacient);
}

const createMedicalAppointment = async (req, res) => {
  const createdMedicalAppointment = await taskModel.createMedicalAppointment(req.body);
  return res.status(201).json(createdMedicalAppointment);
}

module.exports={
  getAllPacient,
  createPacient,
  getAllDoctor,
  createMedicalAppointment
}
