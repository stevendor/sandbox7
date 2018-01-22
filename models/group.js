var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
    name: String,
    element: String
});
module.exports = mongoose.model('Group', groupSchema);