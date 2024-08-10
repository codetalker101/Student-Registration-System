const express = require("express");
const route = express();

const userController = require("../controllers/userController")
const siswaController = require("../controllers/siswaController")
const ortuController = require("../controllers/ortuController")
const cetakSiswa = require("../controllers/cetakSiswa")
const services = require("../service/render")

// ROOT ROUTE

route.get('/', services.homeRoutes)

route.get('/addSiswa', services.addSiswa)

route.get('/addOrangtua', services.addOrangtua)

route.get('/pindahanSiswa', services.pindahanSiswa)

route.get("/adminLogin", services.adminLogin)

route.get("/adminDashboard", services.adminDashboard)

route.get("/siswaDatabases", services.siswaDatabases)

route.get("/ortuDatabases", services.ortuDatabases)

route.get("/usersDatabases", services.usersDatabases)

route.get("/dataPembayaran", services.dataPembayaran)

route.get("/cetakSiswa", services.cetakSiswa)

route.get("/pesanMasuk", services.pesanMasuk)

// API ROUTE / users route

route.post("/users", userController.createUser)

route.get("/users", userController.getAllUsers)

route.get("/users/:id", userController.getOneUser)

route.put("/users/:id", userController.updateOneUser)

route.delete("/users/:id", userController.deleteOneUser)

// API ROUTE / siswa route

route.post("/siswa", siswaController.createSiswa)

route.get("/siswa", siswaController.getAllSiswa)

route.get("/siswa/:id", siswaController.getOneSiswa)

route.put("/siswa/:id", siswaController.updateOneSiswa)

route.delete("/siswa/:id", siswaController.deleteOneSiswa)

// API ROUTE / orang tua and wali route

route.post("/orangtua", ortuController.createOrtu)

route.get("/orangtua", ortuController.getAllOrtu)

route.get("/orangtua/:id", ortuController.getOneOrtu)

route.put("/orangtua/:id", ortuController.updateOneOrtu)

route.delete("/orangtua/:id", ortuController.deleteOneOrtu)

module.exports = route;
