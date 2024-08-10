const pool = require("../database/db");
// createUser
exports.createUser = async (req, res) => {
  try {
    const { username, name, email, password, hak_akses, created_at, last_login} = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (username, name, email, password, hak_akses, created_at, last_login) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [username, name, email, password, hak_akses, created_at, last_login],
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// get all users 
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get one user 
exports.getOneUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const oneUser = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.status(200).json(oneUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// update a user 
exports.updateOneUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { username, name, email, password, hak_akses, created_at, last_login } = req.body;

    const updateUser = await pool.query(
      "UPDATE users SET username = $1, name = $2, email = $3, password = $4, hak_akses = $5, created_at = $6, last_login = $7 WHERE user_id = $8",
      [username, name, email, password, hak_akses, created_at, last_login, id],
    );
    res.json("Siswa has been updated");
  } catch (err) {
    console.error(err.message);
  }
};

// delete a note
exports.deleteOneUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id],
    );
    res.json("Siswa has been deleted");
  } catch (err) {
    console.error(err.message);
  }
};
