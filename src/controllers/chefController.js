const Chef = require('../models/chefModel');

// 1. GET ALL
const getAllChefs = async (req, res) => {
    try {
        const chefs = await Chef.find();
        res.status(200).json(chefs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE
const createChefs = async (req, res) => {
    try {
        const newChef = await Chef.create(req.body);
        res.status(201).json(newChef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 3. GET ONE
const getChefsById = async (req, res) => {
    try {
        const chef = await Chef.findById(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE
const updateChefs = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json(chef);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. DELETE
const deleteChefs = async (req, res) => {
    try {
        const chef = await Chef.findByIdAndDelete(req.params.id);
        if (!chef) return res.status(404).json({ message: 'Chef not found' });
        res.status(200).json({ message: 'Chef deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllChefs,
    createChefs,
    getChefsById,
    updateChefs,
    deleteChefs,
};