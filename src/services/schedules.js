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

module.exports = { getAllSchedules };
