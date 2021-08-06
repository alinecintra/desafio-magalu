const connect = require("./mysql");

async function selectSchedules() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM scheduling;');
  return rows;
}

module.exports = { selectSchedules };