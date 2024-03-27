
//  HERE IS BEING MADE THE VALIDATION OF BODY
const validationBody = (req, res, next)=>{
  const { body } = req;
  if (body.telefone === undefined || body.nome === undefined ||  body.email === undefined) {
    return res.status(400).json({ message: "O campo nome,email e telefone é obrigatório" });
}
if (body.telefone === '' || body.nome === '' ||  body.email === '') {
  return res.status(400).json({ message: "vodce tem que digitrar" });
}

  next()
}

module.exports = {
  validationBody
}
