var mongoose = require('mongoose');
var classSchema = new mongoose.Schema({
    name: String,
    badge: Number,
    dob: { type: Date, default: Date.now },
    isloved: Boolean
});
mongoose.model('Blob', classSchema);
