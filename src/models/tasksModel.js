
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
    const createdAppointmentComplete = await connection.execute('SELECT * FROM Consulta WHERE id=?',[createdAppointment.insertId])
    return createdAppointmentComplete[0][0];
};

const deleteConsult = async (id) => {
  const removedConsult = await connection.execute("DELETE FROM Consulta WHERE id = ?", [id]);
  return removedConsult;
}

const informationClient = async (id) => {
  const informationOfClient = await connection.execute("SELECT email FROM Paciente WHERE id=?",[id]);
  console.log(informationOfClient);
}

const informationDoctor = async (id) => {
  const informationOfDoctor = await connection.execute("SELECT * FROM Medico WHERE id=?",[id]);
  return informationOfDoctor
}

const tudoAqui = async (id) =>{
  const ollHereComplete = await connection.execute('SELECT * FROM Consulta WHERE id=?',[id])
  console.log(ollHereComplete);
}



// const updateConsult = async(id) =>{
//   const updateConsult = await connection.execute("DELETE FROM Consulta WHERE id = ?", [id]);
//   return updateConsult;
// }


module.exports = {
  getAllPacient,
  createPacient,
  getAllDoctor,
  createMedicalAppointment,
  deleteConsult,
  informationClient,
  informationDoctor,
  tudoAqui
  // updateConsult
};
