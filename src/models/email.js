const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 465,
  secure:true,
  auth:{
    user:'apollocalebe@gmail.com',
    pass:'eueh wbxj jszo ooni'
  }
})

const emailClient = transport.sendMail({
  from:'Hospital La casa del Salude <apollocalebe@gmail.com>',
  to:'apollocalebe219@gmail.com',
  subject:'fazendo o teste',
  html: `
  <html>
  <head>
    <title>Consulta Agendada</title>
  </head>
  <body>
    <h1>Consulta Agendada</h1>
    <p>Prezado(a) paciente,</p>
    <p>Gostaríamos de lembrá-lo sobre a sua consulta agendada no Hospital La casa del Salude.</p>
    <p><strong>Médico:</strong> Dr. João Silva</p>
    <p><strong>Data e Hora:</strong> 3 de abril de 2024, às 10:00</p>
    <p>Por favor, chegue pontualmente para a sua consulta.</p>
    <img src="https://img.freepik.com/vetores-gratis/pessoas-caminhando-e-sentadas-no-predio-do-hospital-exterior-em-vidro-da-clinica-da-cidade-ilustracao-em-vetor-plana-para-ajuda-medica-emergencia-arquitetura-conceito-de-saude_74855-10130.jpg" alt="Imagem do Hospital">
    <p>Atenciosamente,<br>Equipe Hospital La casa del Salude.</p>
  </body>
  </html>
  `,
  text:'Olá, me chamo Calebe Apollo'
})
.then(()=> console.log('email enviado com sucesso'))
.catch((err)=>console.log(err))

module.exports = {
  emailClient
}

