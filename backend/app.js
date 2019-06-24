'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

var app = express();

// cargar rutas
var userRoutes = require('./routes/users');

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configurar CORS
app.use(cors());

//rutas base
app.use('/api', userRoutes)

module.exports = app;