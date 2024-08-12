const pool = require('../database/db.js');

const usersTable = {};

exports.getTableUsers = async (req, res) => {
  const sql = 'SELECT user_id, username, email, hak_akses, last_login FROM users ORDER BY id ASC';
    pool.query(sql, (error, results) => {
      if (error) {
          throw error;
      } else {
        usersTable = {print: results.rows}
        res.render("usersDatabases", usersTable)
    }
  })
}
