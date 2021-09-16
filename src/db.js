const mysql = require('mysql');

const createConnection = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  });

  return connection;
}

const getAll = async (table) => {
  return new Promise((resolve, reject) => {
    const conn = createConnection();

    conn.query(`SELECT * FROM ${table}`, (err, results) => {
      if (err) reject(new Error(err.toString()));

      resolve(results);
    });

    conn.end();
  });
}

module.exports = {
  getAll
}