var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
    name: String,
    absent: Boolean,
    note: String
});

module.exports = mongoose.model('Test', TestSchema);