var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    telefon: Number,
    activ: Boolean
});
module.exports = mongoose.model('User', userSchema);