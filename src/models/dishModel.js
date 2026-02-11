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
        min: [0, 'Price cannot be negative'], //Price cannot be negative
        max: [1000, 'Price cannot exceed 1000'], //Custom error message if price > 1000
    },
    category: {
        type: String,
        //Only these 4 words are allowed
        enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
        message: `{VALUE} is not a valid category`, //Custom error message for invalid category
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
    reviews: [
        {
            user: String,
            rating: {type: Number, min: 1, max: 5},
            comment: String
        },
    ],
    chef: {
        type: mongoose.Schema.Types.ObjectId, //This is a link
        ref: 'Chef', //Pointing to the Chef model
    },
});

module.exports = mongoose.model('Dish', dishSchema);