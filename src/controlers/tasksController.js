const  {sendEmail}  = require('../models/email')
const taskModel = require('../models/tasksModel')
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
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
  try {
    const createdPacient = await taskModel.createPacient(req.body);
    return res.status(201).json(createdPacient);
  }catch(e) {
    return res.status(404).json({error:e.message});
  }
}

const createMedicalAppointment = async (req, res) => {

  console.log('content', req.body);
  const { medico_nome } = req.body;
  // const [informationDoctor] =  await taskModel.informationDoctor(medico_id);
  const [informationDoctor] =  await taskModel.getAllDoctor(medico_nome);
  console.log(informationDoctor);
  if(!informationDoctor) {
    return res.status(404).json({error:"Médico nao encontrado."});
  }
  console.log('>', medico_nome);
  console.log('body:', req.body);

  // 1-Inserir a consulta no banco
  const createdMedicalAppointment = await taskModel.createMedicalAppointment({
    ...req.body,
    medico_id: informationDoctor.id
  });

  //2.1- pega email
  // const { medico_id } = req.body;


  // Pega o medico do banco usando o id passado na request

  const email = informationDoctor.email
  const nome = informationDoctor.nome
  const dateToIstring = createdMedicalAppointment.data_hora.toISOString();
  const hora = dateToIstring.slice(11, 16);
  const date = dateToIstring.slice(0, 10);
  // 2-Enviar um email para o médico contendo os adados da consulta
  sendEmail(email,nome, date, hora )
console.log(email,nome);
  // 3 - Retornar registro do jeito q está no banco
  return res.status(201).json(createdMedicalAppointment);
}

// const informationClient = async (req, res) => {
//   const informationOfClient = await taskModel.
//   return informationOfClient
// }


const mostrarBody = async(req, res) => {
    const body = req.body
    return console.log(body);
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
  mostrarBody,

  // updateConsult
}
