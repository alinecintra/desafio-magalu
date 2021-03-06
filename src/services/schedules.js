const schedulesDb = require("../repositories/schedules");
let errorMessage = { message: "" };

async function getAllSchedules(res) {
  try {
    const schedules = await schedulesDb.selectSchedules();
    if (schedules.length === 0) {
      errorMessage.message =
        "Não existe nenhum agendamento de envio de comunicação.";
      return res.status(404).send(errorMessage);
    }
    return res.send(schedules);
  } catch (error) {
    errorMessage.message =
      "Não foi possível retornar nenhum agendamento de envio de comunicação.";
    return res.status(500).send(errorMessage);
  }
}

async function getSchedulesById(req, res) {
  try {
    const schedules = await schedulesDb.selectSchedulesById(req.params.id);
    if (schedules.length === 0) {
      errorMessage.message =
        "Não existe nenhum agendamento de envio de comunicação com o id informado.";
      return res.status(404).send(errorMessage);
    }
    return res.send(schedules);
  } catch (error) {
    errorMessage.message =
      "Não foi possível retornar nenhum agendamento de envio de comunicação.";
    return res.status(500).send(errorMessage);
  }
}

async function postSchedules(req, res) {
  try {
    const schedules = await schedulesDb.insertSchedules(req.body);
    return res.send(schedules);
  } catch (error) {
    errorMessage.message =
      "Não foi possível realizar o agendamento do envio da comunicação";
    return res.status(500).send(errorMessage);
  }
}

async function deleteSchedules(req, res) {
  try {
    const schedules = await schedulesDb.deleteSchedules(req.params.id);
    if (schedules.affectedRows === 0) {
      errorMessage.message =
        "Não existe nenhum agendamento de envio de comunicação com o id informado.";
      return res.status(404).send(errorMessage);
    }
    return res.send({
      message: "Agendamento de envio de comunicação excluído com sucesso.",
    });
  } catch (error) {
    errorMessage.message =
      "Não foi possível realizar a exclusão do agendamento do envio da comunicação";
    return res.status(500).send(errorMessage);
  }
}

module.exports = { getAllSchedules, getSchedulesById, postSchedules, deleteSchedules };
