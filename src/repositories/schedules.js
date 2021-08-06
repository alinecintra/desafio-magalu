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

module.exports = { selectSchedules, selectSchedulesById };