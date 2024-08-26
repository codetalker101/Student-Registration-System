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

exports.addUser = (req, res) => {
  res.render("users/addUser")
}

exports.updateUser = (req, res) => {
  res.render("users/updateUser")
}



// ADMIN DASHBOARD

exports.adminLogin = (req, res) => {
  res.render("administrasi/login")
}

exports.adminDashboard = (req, res) => {
  res.render("administrasi/adminDashboard")
}

exports.pegawaiDashboard = (req, res) => {
  res.render("administrasi/pegawaiDashboard")
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

exports.editHome = (req, res) => {
  res.render("administrasi/editHome")
}

exports.editInformasi = (req, res) => {
  res.render("administrasi/editInformasi")
}

exports.pesanMasuk = (req, res) => {
  res.render("administrasi/pesanMasuk")
}

// Siswa Dashboard

exports.siswaDashboard = (req, res) => {
  res.render("siswa/siswaDashboard")
}

exports.asalmulaSiswa = (req, res) => {
  res.render("siswa/asalmulaSiswa")
}

// Ortu Dashboard

exports.orangtuaDashboard = (req, res) => {
  res.render("orangtua/orangtuaDashboard")
}

// ERROR ROUTE

exports.error401 = (req, res) => {
  res.render("administrasi/error/401")
}

exports.error404 = (req, res) => {
  res.render("administrasi/error/404")
}

exports.error500 = (req, res) => {
  res.render("administrasi/error/500")
}
