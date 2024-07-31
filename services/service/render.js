exports.homeRoutes = (req, res) => {
  res.render("index")
}

exports.addSiswa = (req, res) => {
  res.render("siswa/addSiswa")
}

exports.addOrangtua = (req, res) => {
  res.render("orangtua/addOrangtua")
}

exports.pindahanSiswa = (req, res) => {
  res.render("siswa/pindahanSiswa")
}

// ADMIN DASHBOARD

exports.adminLogin = (req, res) => {
  res.render("login/adminLogin")
}

exports.adminDashboard = (req, res) => {
  res.render("administrasi/adminDashboard")
}

exports.siswaDatabases = (req, res) => {
  res.render("administrasi/siswaDatabases")
}

exports.ortuDatabases = (req, res) => {
  res.render("administrasi/ortuDatabases")
}

exports.usersDatabases = (req, res) => {
  res.render("administrasi/usersDatabases")
}

exports.dataPembayaran = (req, res) => {
  res.render("administrasi/dataPembayaran")
}

exports.cetakSiswa = (req, res) => {
  res.render("administrasi/cetakSiswa")
}
