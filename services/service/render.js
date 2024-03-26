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

exports.adminLogin = (req, res) => {
  res.render("login/adminLogin")
}

