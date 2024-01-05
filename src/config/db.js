const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

async function executeQuery(query) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    if (conn) conn.end();
  }
}

module.exports = { executeQuery };
