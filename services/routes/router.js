const express = require("express");
const route = express.Router();

const userController = require("../controllers/userController")
const siswaController = require("../controllers/siswaController")
const ortuController = require("../controllers/ortuController")
const cetakSiswa = require("../controllers/cetakSiswa")
const services = require("../service/render")

// ROOT ROUTE

route.get('/', services.homeRoutes)

route.get('/addSiswa', services.addSiswa)

route.get('/updateSiswa', services.updateSiswa)

route.get('/addOrangtua', services.addOrangtua)

route.get('/updateOrangtua', services.updateOrangtua)

route.get('/orangtuaDashboard', services.orangtuaDashboard)

route.get('/addPindahanSiswa', services.addPindahanSiswa)

route.get('/updatePindahanSiswa', services.updatePindahanSiswa)

route.get('/siswaDashboard', services.siswaDashboard)

route.get('/addUser', services.addUser)

route.get('/updateUser', services.updateUser)

route.get("/adminLogin", services.adminLogin)

route.get("/adminDashboard", services.adminDashboard)

route.get("/dataPembayaran", services.dataPembayaran)

route.get("/cetakSiswa", services.cetakSiswa)

route.get("/pesanMasuk", services.pesanMasuk)

route.get("/error401", services.error401)

route.get("/error404", services.error404)

route.get("/error500", services.error500)


// API ROUTE / users route

route.post("/users", userController.createUser)

route.get("/usersDatabases", userController.getAllUsers)

route.get("/users/:id", userController.getOneUser)

route.put("/users/:id", userController.updateOneUser)

route.delete("/users/:id", userController.deleteOneUser)


// API ROUTE / siswa route

route.post("/siswa", siswaController.createSiswa)

route.get("/siswaDatabases", siswaController.getAllSiswa)

route.get("/siswa/:id", siswaController.getOneSiswa)

route.put("/siswa/:id", siswaController.updateOneSiswa)

route.delete("/siswa/:id", siswaController.deleteOneSiswa)


// API ROUTE / orang tua and wali route

route.post("/orangtua", ortuController.createOrtu)

route.get("/ortuDatabases", ortuController.getAllOrtu)

route.get("/orangtua/:id", ortuController.getOneOrtu)

route.put("/orangtua/:id", ortuController.updateOneOrtu)

route.delete("/orangtua/:id", ortuController.deleteOneOrtu)


module.exports = route;
