const connect = require("./mysql");

async function selectSchedules() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM scheduling;');
  return rows;
}

async function selectSchedulesById(id) {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM scheduling WHERE id=?;', id);
  return rows;
}

async function insertSchedules(scheduling) {
  const conn = await connect();
  const [rows] = await conn.query('INSERT INTO scheduling(send_date, receiver, message, message_type) VALUES (?, ?, ?, ?)', [scheduling.send_date, scheduling.receiver, scheduling.message, scheduling.message_type]);
  return rows;
}

module.exports = { selectSchedules, selectSchedulesById, insertSchedules };