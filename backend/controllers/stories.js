'use srtict'

var Cuentos= require('../models/stories')


function pruebas(req,res){
    res.status(200).send({
        message: 'Esta es la ruta de cuentos'
    })
}

function getStories(req, res) {
    Cuentos.find({}).sort({ '_id': -1 }).exec((err, stories) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        } else {
            if (stories) {
                res.status(200).send({
                    stories
                })
            } else {
                res.status(404).send({
                    message: 'No users yet!'
                })
            }
        }
    });
}

module.exports={
    pruebas,
    getStories
}