const pool = require("../database/db");
// create Orang tua / wali
exports.createOrtu = async (req, res) => {
  try {
    const { nama_ayah, nama_ibu, pendidikan_ayah, pendidikan_ibu, pekerjaan_ayah, pekerjaan_ibu, nama_wali, pendidikan_wali, hubungan_wali, pekerjaan_wali } = req.body;

    const newOrtu = await pool.query(
      "INSERT INTO orangtua (nama_ayah, nama_ibu, pendidikan_ayah, pendidikan_ibu, pekerjaan_ayah, pekerjaan_ibu, nama_wali, pendidikan_wali, hubungan_wali, pekerjaan_wali) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [nama_ayah, nama_ibu, pendidikan_ayah, pendidikan_ibu, pekerjaan_ayah, pekerjaan_ibu, nama_wali, pendidikan_wali, hubungan_wali, pekerjaan_wali],
    );
    res.json(newOrtu.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// get all Orang tua / Wali
exports.getAllOrtu = async (req, res) => {
  try {
    const allOrtu = await pool.query("SELECT * FROM orangtua");
    res.json(allOrtu.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get one Orang tua / Wali  
exports.getOneOrtu = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const oneOrtu = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]
    );
    res.status(200).json(oneOrtu.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// update a Orang tua / Wali 
exports.updateOneOrtu = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nama_ayah, nama_ibu, pendidikan_ayah, pendidikan_ibu, pekerjaan_ayah, pekerjaan_ibu, nama_wali, pendidikan_wali, hubungan_wali, pekerjaan_wali } = req.body;

    const updateOrtu = await pool.query(
      "UPDATE orangtua SET nama_ayah = $1, nama_ibu = $2, pendidikan_ayah = $3, pendidikan_ibu = $4, pekerjaan_ayah = $5, pekerjaan_ibu = $6, nama_wali = $7, pendidikan_wali = $8, hubungan_wali = $9, pekerjaan_wali = $10 WHERE ortu_id = $11",
      [nama_ayah, nama_ibu, pendidikan_ayah, pendidikan_ibu, pekerjaan_ayah, pekerjaan_ibu, nama_wali, pendidikan_wali, hubungan_wali, pekerjaan_wali, id],
    );
    res.json("Orang tua and Wali has been updated");
  } catch (err) {
    console.error(err.message);
  }
};

// delete a Orang Tua / Wali
exports.deleteOneOrtu = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deleteOrtu= await pool.query(
      "DELETE FROM orangtua WHERE ortu_id = $1",
      [id],
    );
    res.json("Siswa has been deleted");
  } catch (err) {
    console.error(err.message);
  }
};
