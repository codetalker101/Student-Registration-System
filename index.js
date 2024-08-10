const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('sequelize')
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

// path to dotenv
dotenv.config({ path: 'config.env' })

// listening to port
const PORT = process.env.PORT || 8080

// view engine
app.set('view engine', "ejs");

// load assets
app.use(express.static(__dirname + '/assets'));

// load router
app.use("/", require("./services/routes/router"))

app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`)
});


