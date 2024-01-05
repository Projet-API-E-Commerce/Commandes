const db = require('../config/db');

const orderModel = require('../models/orderModel');

async function getAllOrders(req, res) {
    try {
        const orders = await orderModel.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des commandes');
    }
}

function getOrderById(req, res) {
  // Logique pour retourner un ordre spécifique par ID
}

function createOrder(req, res) {
  // Logique pour créer un nouvel ordre
}

function updateOrder(req, res) {
  // Logique pour mettre à jour un ordre par ID
}

function deleteOrder(req, res) {
  // Logique pour supprimer un ordre par ID
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
