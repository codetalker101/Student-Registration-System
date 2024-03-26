const pool = require("../database/db")

// create siswa (for registration)
exports.createSiswa = async (req, res) => {
  try {
    const { nama_panggilan, nama_lengkap, no_tlp, password} = req.body;

    const newSiswa = await pool.query(
      "INSERT INTO siswa (nama_panggilan, nama_lengkap, no_tlp, password) VALUES($1, $2, $3, $4) RETURNING *",
      [nama_panggilan, nama_lengkap, no_tlp, password],
    );
    res.json(newSiswa.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
};

// get all siswa
exports.getAllSiswa = async (req, res) => {
  try {
    const allSiswa = await pool.query(
      "SELECT * FROM siswa"
    )
    res.json(allSiswa.rows)
  } catch (err) {
    console.error(err.message)
  }
};

// get one siswa
exports.getOneSiswa = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const oneSiswa = await pool.query(
      "SELECT * FROM siswa WHERE siswa_id = $1", [id]
    );
    res.status(200).json(oneSiswa.rows[0])
  } catch (err) {
    console.error(error.message)
  }
};

// update a siswa
exports.updateOneSiswa = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nama_panggilan, nama_lengkap, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, anak_ke, jml_saudara, bahasa, berat_badan, tinggi_badan, gol_darah, riwayat_penyakit, alamat, no_tlp, no_wa, tinggal_bersama, pra_sekolah_dasar, password} = req.body;

    const updateSiswa = await pool.query(
      "UPDATE siswa SET nama_panggilan = $1, nama_lengkap = $2, jenis_kelamin = $3, tempat_lahir = $4, tanggal_lahir = $5, agama = $6, kewarganegaraan = $7, anak_ke = $8, jml_saudara = $9, bahasa = $10, berat_badan = $11, tinggi_badan = $12, gol_darah = $13, riwayat_penyakit = $14, alamat = $15, no_tlp = $16, no_wa = $17, tinggal_bersama = $18, pra_sekolah_dasar = $19, password = $20 WHERE siswa_id = $21",
      [nama_panggilan, nama_lengkap, jenis_kelamin, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, anak_ke, jml_saudara, bahasa, berat_badan, tinggi_badan, gol_darah, riwayat_penyakit, alamat, no_tlp, no_wa, tinggal_bersama, pra_sekolah_dasar, password, id],
    );
    res.json("Updated siswa")
  } catch (err) {
    console.error(err.message)
  }
};

// delete a siswa
exports.deleteOneSiswa = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const deleteSiswa = await pool.query(
      "DELETE FROM siswa WHERE id_siswa = $1", [id],
    );
    res.json("Siswa has been deleted")
  } catch (err) {
    console.error(err.message)
  }
};
