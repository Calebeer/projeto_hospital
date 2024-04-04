const { z } = require('zod')
const cpfValidator = require("cpf-validator")
const taskModel = require('../models/tasksModel')



//  HERE WE ARE USING ZOD TO THE VALIDATION
const validationBody = (req, res, next)=>{
  try{
    const { body } = req;
    const schema = z.object({
      nome:z.string().min(1).max(255),
      email:z.string().min(6).max(255).transform(arg => {
        return arg.toLowerCase();
      }),
      telefone:z.string().min(8),
      cpf:z.string().refine(arg =>{
        return cpfValidator.isValid(arg)
      })

    })
    schema.parse(body)
    next()
  }
  catch(err){
    console.log(err);
    return res.status(401).json({err})
  }
}

const informationClient = async (req, res, next) => {
  const { paciente_id }  = req.body;
  const informationClient =  await taskModel.informationClient(paciente_id);
  // return informationClient[0].email, next();
  // console.log(informationClient[0].email, next());
  console.log(informationClient), next();
}

const informationDoctor = async (req, res, next) => {
  const { medico_id } = req.body;
  const [informationDoctor] =  await taskModel.informationDoctor(medico_id);
  console.log(informationDoctor[0].email), next();
}

// const informationDoctor = async (req, res, next) => {
//   const { medico_id, paciente_id } = req.body;
//   const [informationDoctor] =  await taskModel.informationClient(medico_id);
//   console.log(informationDoctor[0].email, next());
// }

module.exports = {
  validationBody,
  informationClient,
  informationDoctor,
  // informationDoctor
}
