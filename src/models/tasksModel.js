
const connection = require('./conection');

const getAllPacient = async ()=>{
  const [tasks] = await connection.execute('SELECT * FROM Paciente');
  return tasks;
}

const getAllDoctor = async ()=>{
  const [tasks] = await connection.execute('SELECT * FROM Medico');
  return tasks;
}

// HERE IS BEGIN CREATED THE PACIENT
const createPacient = async (paciente) => {
    const { nome, email, telefone, cpf} = paciente;
    const query = "INSERT INTO Paciente(nome, email, telefone, cpf) VALUES(?,?,?,?)";

    const [createdPacient] = await connection.execute(query,[nome,email,telefone, cpf]);
    const pacientComplete = await connection.execute('SELECT * FROM Paciente WHERE id=?', [createdPacient.insertId])

    return pacientComplete[0][0];
};

const createMedicalAppointment = async (pacient) => {
    const { medico_id, paciente_id, data_hora, diagnostico} = pacient;
    const query = "INSERT INTO Consulta(medico_id, paciente_id, data_hora, diagnostico ) VALUES(?,?,?,?)";

    const [createdAppointment] = await connection.execute(query,[medico_id,paciente_id,data_hora, diagnostico]);

    return {insertId:createdAppointment.insertId};
};

module.exports = {
  getAllPacient,
  createPacient,
  getAllDoctor,
  createMedicalAppointment
};
