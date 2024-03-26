const pool = require("../database/db");
// createUser
exports.createUser = async (req, res) => {
  try {
    const { username, name, password, hak_akses } = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (username, name, password, hak_akses) VALUES($1, $2, $3, $4) RETURNING *",
      [username, name, password, hak_akses],
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
    const { username, name, password, hak_akses } = req.body;

    const updateUser = await pool.query(
      "UPDATE users SET username = $1, name = $2, password = $3, hak_akses = $4 WHERE user_id = $5",
      [username, name, password, hak_akses, id],
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
