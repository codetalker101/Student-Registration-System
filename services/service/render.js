exports.homeRoutes = (req, res) => {
  res.render("index")
}

exports.addSiswa = (req, res) => {
  res.render("siswa/addSiswa")
}

exports.updateSiswa = (req, res) => {
  res.render("siswa/updateSiswa")
}

exports.addOrangtua = (req, res) => {
  res.render("orangtua/addOrangtua")
}

exports.updateOrangtua = (req, res) => {
  res.render("orangtua/updateOrangtua")
}

exports.addPindahanSiswa = (req, res) => {
  res.render("siswa/addPindahanSiswa")
}

exports.updatePindahanSiswa = (req, res) => {
  res.render("siswa/updatePindahanSiswa")
}

exports.addUser = (req, res) => {
  res.render("users/addUser")
}

exports.updateUser = (req, res) => {
  res.render("users/updateUser")
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

exports.pesanMasuk = (req, res) => {
  res.render("administrasi/pesanMasuk")
}

// Siswa Dashboard

exports.siswaDashboard = (req, res) => {
  res.render("siswa/siswaDashboard")
}

// ERROR ROUTE

exports.error401 = (req, res) => {
  res.render("administrasi/401")
}

exports.error404 = (req, res) => {
  res.render("administrasi/404")
}

exports.error500 = (req, res) => {
  res.render("administrasi/500")
}
