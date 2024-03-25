
const connection = require('./conection')

const getAll = async()=>{
  const tasks = await connection.execute('SELECT * FROM Paciente');
  return tasks
}

module.exports = {
  getAll
};
