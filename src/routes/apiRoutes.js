const express = require('express');
const router = express.Router();

// Import the controller
const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

const {protect, authorize} = require('../middleware/authMiddleware');

//ANYONE CAN VIEW DISHES

router.get('/dishes', getAllDishes);

//ONLY ADMINS AND MANAGERS CAN CREATE DISHES

router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

//ANYONE CAN VIEW DISHES BY ID
router.get('/dishes/:id', getDishById);

// If user sends PUT /dishes/:id → update dish
router.put('/dishes/:id', protect, authorize('admin', 'manager'), updateDish);

// If user sends DELETE /dishes/:id → delete dish
router.delete('/dishes/:id', protect, authorize('admin', 'manager'), deleteDish);


// Export router
module.exports = router;