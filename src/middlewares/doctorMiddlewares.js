// const validationBody = (req, res, next)=>{
//   const { body } = req;

//   if (body.nome === undefined || body.especialidade === undefined ||  body.email === undefined) {
//     return res.status(400).json({ message: "O campo nome,email e telefone é obrigatório" });
// }

// if (body.nome === '' || body.especialidade === '' ||  body.email === '') {
//   return res.status(400).json({ message: "você tem que digitar" });
// }

//   next()
// }

// module.exports = {
//   validationBody
// }
