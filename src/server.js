const app = require('./app')
require('dotenv').config();

// HERE IS BEGIN CONFIGURATED THE PORT
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
