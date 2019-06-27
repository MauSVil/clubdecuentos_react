'use state'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = Schema({
    title: String,
    author: String,
    cost: String,
    description: String,
    image: String,
})

module.exports = mongoose.model('Story', StorySchema)