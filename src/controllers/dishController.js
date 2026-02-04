const Dish = require('../models/dishModel');

//1. GET ALL: Show the full menu
const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find(); // .find() means 'Get Everything'
        res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
};

//2. CREATE: Add a new food item
const createDish = async (req, res) => {
    try {
        const newDish = await Dish.create(req.body); //.create() means 'Save New'
        res.status(201).json(newDish);
    } catch (error) {
      res.status(400).json({message : error.message});
    }
};

//3. GET ONE: Find a specific food by ID
const getDishById = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id); //Find by the ID number
        if (!dish) return res.status(404).json({message: 'Dish not found'});
        res.status(200).json(dish);
    } catch (error) {
      res.status(500).json({message : error.message});
    }
};

//4. UPDATE: Change a price or name
const updateDish = async (req, res) => {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!dish) return res.status(404).json({message: 'Dish not found'});
        res.status(200).json(dish);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
};

//5. DELETE: Remove an item from menu
const deleteDish = async (req, res) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) return res.status(404).json({message: 'Dish not found'});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
};