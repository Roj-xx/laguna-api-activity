const express = require('express');
const router = express.Router();

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

// 1. If user goes to GET / (Show Menu) -> ask Chef to getAllDishes
router.get('/dishes', getAllDishes);

// 2. If user sends POST / (New Order) -> ask Chef to createDish
router.post('/dishes', createDish);

// 3. If user goes to GET /:id (Ask for specific meal) -> ask Chef to getDishById
router.get('/dishes/:id', getDishById);

// 4. If user sends PUT /:id (Change Meal) -> ask Chef to updateDish
router.put('/dishes/:id', updateDish);

// 5. If user sends DELETE /:id (Cancel Meal) -> ask Chef to deleteDish
router.delete('/dishes/:id', deleteDish);

module.exports = router;