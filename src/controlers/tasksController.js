const taskModel = require('../models/tasksModel')

const getAll = async (req, res)=>{
  const tasks = await taskModel.getAll()
  return res.status(200).json(tasks)
}

const createPacient = async(req, res)=>{
  const createdPacient = await taskModel.createPacient(req.body);
  return res.status(201).json(createdPacient);
}

module.exports={
  getAll,
  createPacient
}
