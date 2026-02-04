const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: {
        type: String, //It must be text
        required: true, //You must provide a name
        unique: true, //No two dishes can have the same name
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        //Only these 4 words are allowed
        enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Dish', dishSchema);