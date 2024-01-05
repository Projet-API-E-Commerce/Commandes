const OrderService = require('../services/orderServices');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await OrderService.getOrderById(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await OrderService.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderService.updateOrder(req.params.id, req.body);
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await OrderService.deleteOrder(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateOrderShipment = async (req, res) => {
    try {
        const updatedShipment = await OrderService.updateOrderShipment(req.params.id, req.body);
        res.json(updatedShipment);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
