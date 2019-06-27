'use strict'

var express = require('express');
var UserController = require('../controllers/users')
var api = express.Router();

api.get('/pruebas', UserController.pruebas)
api.post('/user', UserController.saveUser)
api.get('/users', UserController.getUsers)
api.get('/user/:id', UserController.getUser)
api.put('/user/:id', UserController.updateUser)
api.delete('/user/:id', UserController.deleteUser)
api.post('/login/user',UserController.loginUser)

module.exports = api