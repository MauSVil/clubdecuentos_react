'use strict';
var mongoose = require('mongoose')
var app = require('./app')
var port = 3800


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/creatucuento')
    .then(() => {
        console.log("La conexion a MongoDB se ha realizado correctamente");
        app.listen(port, () => {
            console.log("El servidor esta corriendo en localhost:3800");
        })
    })
    .catch(err => console.log(err));