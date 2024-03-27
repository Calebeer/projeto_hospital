const { z } = require('zod')
//  HERE WE ARE USING ZOD TO THE VALIDATION
const validationBody = (req, res, next)=>{
  try{
    const { body } = req;
    const schema = z.object({
      nome:z.string().min(1).max(255),
      email:z.string().min(6).max(255).transform(arg => {
        return arg.toLowerCase();
      }),
      telefone:z.string().min(8)
    })
    schema.parse(body)
    next()
  }
  catch(err){
    console.log(err);
    return res.status(401).json({err})
  }
}

module.exports = {
  validationBody
}
