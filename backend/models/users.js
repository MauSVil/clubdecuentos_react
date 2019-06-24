'use state'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    username: String,
    email: String,
    gender: String,
    password: String,
    address: String,
})

module.exports = mongoose.model('User', UserSchema)