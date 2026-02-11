const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: String,
    specialty: String,
});

module.exports = mongoose.model('Chef', chefSchema);