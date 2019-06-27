'use strict'
var User = require('../models/users')

function pruebas(req, res) {
    res.status(200).send({
        message: 'Esta ruta es ed prueba en mi api restful con mongo y node'
    });
}

function saveUser(req, res) {
    var user = new User()
    var params = req.body;
    if (params.name) {
        user.name = params.name;
        user.username = params.username;
        user.password = params.password;
        user.email = params.email;
        user.address = params.address;
        user.save((err, userStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error en el servidor'
                })
            } else {
                if (userStored) {
                    res.status(200).send({
                        user: userStored
                    })
                } else {
                    res.status(200).send({
                        message: 'No se ha guardado la fruta'
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            message: 'El nombre de la fruta es obligatorio'
        })
    }
}

function getUsers(req, res) {
    User.find({}).sort({ '_id': -1 }).exec((err, users) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (users) {
                res.status(200).send({
                    users
                })
            } else {
                res.status(404).send({
                    message: 'No users yet!'
                })
            }
        }
    });
}

function getUser(req, res) {
    var userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if (err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if (user) {
                res.status(200).send({
                    user
                })
            } else {
                res.status(404).send({
                    message: 'User not found'
                })
            }
        }
    })
}

function updateUser(req, res) {
    var frutaId = req.params.id;
    var update = req.body;
    User.findByIdAndUpdate(frutaId, update, { new: true }, (err, userUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if (userUpdated) {
                res.status(200).send({
                    fruta: userUpdated
                })
            } else {
                res.status(404).send({
                    message: 'User not found'
                })
            }
        }
    })
}

function deleteUser(req, res) {
    var userId = req.params.id;
    User.deleteOne({ "_id": userId }, (err, userDeleted) => {
        if (err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if (userDeleted) {
                res.status(200).send({
                    message: 'User deleted'
                })
            } else {
                res.status(404).send({
                    message: 'User not found'
                })
            }
        }
    })
}

function loginUser(req,res){
    var params = req.body;
    User.findOne(params, function(err, result) {
        if(result){
            res.status(200).send({
                message: 'User found'
            })
        }
        else{
            res.send({
                message:'User not found'
            })
        }
      });
    }

module.exports = {
    pruebas,
    saveUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser
}