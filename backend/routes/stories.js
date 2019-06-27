'use strict'

var express = require('express');
var StoryController = require('../controllers/stories')
var api = express.Router();

api.get('/pruebas', StoryController.pruebas)
api.get('/cuentos',StoryController.getStories)

module.exports = api