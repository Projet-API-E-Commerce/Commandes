/*const express = require('express');
const router = express.Router();*/

// Importation des contrôleurs
/*const orderController = require('../controllers/orderController');
const userController = require('../controllers/userController');*/

// Routes pour les commandes
/*router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);
router.patch('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);*/

// Routes pour les utilisateurs si nécessaire
// router.get('/users', userController.getAllUsers);
// ... autres routes pour les utilisateurs

/*module.exports = router;*/


import OrderRoutes from "./order.routes.js";

export default [
    OrderRoutes
]