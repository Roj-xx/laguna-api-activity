// src/models/dishModel.js
const dishes = [
    {
        id: 1,
        name: 'Spicy Burger',
        price: 12.99,
        category: 'Lunch',
        isVegetarian : false,
    },
    {
        id: 2,
        name: 'Caesar Salad',
        price: 8.5,
        category: 'Starters',
        isVegetarian : true,
    },
    {
        id: 3,
        name: 'Chocolate Lava Cake',
        price: 6.0,
        category: 'Dessert',
        isVegetarian : true,
    },
    {
        id: 4,
        name: 'Grilled Salmon',
        price: 18.0,
        category: 'Dinner',
        isVegetarian : false,
    },
];

module.exports = dishes;