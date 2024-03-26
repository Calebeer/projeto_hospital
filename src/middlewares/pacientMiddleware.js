const validationBody = (req, res, next)=>{
  const { body } = req;
  if (body.telefone === undefined || body.nome === undefined ||  body.email === undefined) {
    return res.status(400).json({ message: "O campo email ou telefone é obrigatório" });
}
//   const requiredFields = ['telefone', 'nome', 'email'];
// for (const field of requiredFields) {
//     if (!body[field]) {
//         return console.log(field);
//     }
// }
if (body.telefone === '' || body.nome === '' ||  body.email === '') {
  return res.status(400).json({ message: "vodce tem que digitrar" });
}

  next()
}

module.exports = {
  validationBody
}
