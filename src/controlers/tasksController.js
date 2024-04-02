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

const deleteConsult = async (req, res) =>{
  const { id } = req.params;

  await taskModel.deleteConsult(id)
  return res.status(204).json()
}

// const updateConsult = async (req, res) =>{
//   const updateConsult = await taskModel.updateConsult(req.body);
//   return res.status(201).json(updateConsult)
// }

module.exports={
  getAllPacient,
  createPacient,
  getAllDoctor,
  createMedicalAppointment,
  deleteConsult,
  // updateConsult
}
