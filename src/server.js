const app = require('./app')
require('dotenv').config();

// AQUI ESTÁ SENDO CONFIGURADA A PORTA, NO CASO ESTÁ SENDO RODADO NA PORTA 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
