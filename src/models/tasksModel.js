
const connection = require('./conection');

const getAll = async ()=>{
  const [tasks] = await connection.execute('SELECT * FROM Paciente');
  return tasks;
}

const createPacient = async (paciente)=>{

    const { nome, email, telefone} = paciente;
    const query = "INSERT INTO Paciente(nome, email, telefone) VALUES(?,?,?)";

    const [createdPacient] = await connection.execute(query,[nome,email,telefone]);

    return {insertId:createdPacient.insertId};
};

module.exports = {
  getAll,
  createPacient
};
