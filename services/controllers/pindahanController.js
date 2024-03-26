const pool = require("../database/db")

// create siswa (for registration)
exports.createPindahan = async (req, res) => {
  try {
    const { masuk_sebagai, asal_pendidikan, nama_tk, alamat_tk, sttb, lama_belajar, wali, sekolah_asal, alamat_sekolah, tanggal_pindah, tingkat} = req.body;

    const newPindahan = await pool.query(
      "INSERT INTO siswa (masuk_sebagai, asal_pendidikan, nama_tk, alamat_tk, sttb, lama_belajar, wali, sekolah_asal, alamat_sekolah, tanggal_pindah, tingkat) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [masuk_sebagai, asal_pendidikan, nama_tk, alamat_tk, sttb, lama_belajar, wali, sekolah_asal, alamat_sekolah, tanggal_pindah, tingkat],
    );
    res.json(newPindahan.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
};

// get all siswa
exports.getAllPindahan = async (req, res) => {
  try {
    const allPindahan = await pool.query(
      "SELECT * FROM siswa"
    )
    res.json(allPindahan.rows)
  } catch (err) {
    console.error(err.message)
  }
};

// get one siswa
exports.getOnePindahan = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const onePindahan = await pool.query(
      "SELECT * FROM siswa WHERE siswa_id = $1", [id]
    );
    res.status(200).json(onePindahan.rows[0])
  } catch (err) {
    console.error(error.message)
  }
};

// update a siswa
exports.updateOnePindahan = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { masuk_sebagai, asal_pendidikan, nama_tk, alamat_tk, sttb, lama_belajar, wali, sekolah_asal, alamat_sekolah, tanggal_pindah, tingkat} = req.body;

    const updatePindahan = await pool.query(
      "UPDATE siswa SET masuk_sebagai = $1, asal_pendidikan = $2, nama_tk = $3, alamat_tk = $4, sttb = $5, lama_belajar = $6, wali = $7, sekolah_asal = $8, alamat_sekolah = $9, tanggal_pindah = $10, tingkat = $11 WHERE siswa_id = $12",
      [masuk_sebagai, asal_pendidikan, nama_tk, alamat_tk, sttb, lama_belajar, wali, sekolah_asal, alamat_sekolah, tanggal_pindah, tingkat, id],
    );
    res.json("Updated siswa")
  } catch (err) {
    console.error(err.message)
  }
};

// delete a siswa
exports.deleteOnePindahan = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deletePindahan = await pool.query(
      "DELETE FROM siswa WHERE siswa_id = $1", [id],
    );
    res.json("Pindahan has been deleted")
  } catch (err) {
    console.error(err.message)
  }
};
