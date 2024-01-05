const OrderModel = require('../models/orderModel.old.js');

exports.getAllOrders = async () => {
    return await OrderModel.find({});
};

exports.getOrderById = async (id) => {
    return await OrderModel.findById(id);
};

exports.createOrder = async (orderData) => {
    const order = new OrderModel(orderData);
    return await order.save();
};

exports.updateOrder = async (id, orderData) => {
    return await OrderModel.findByIdAndUpdate(id, orderData, { new: true });
};

exports.deleteOrder = async (id) => {
    return await OrderModel.findByIdAndDelete(id);
};

exports.updateOrderShipment = async (id, shipmentData) => {
    // Update the shipment details here
    // You might want to add logic to handle tracking, status updates, etc.
    return await OrderModel.findByIdAndUpdate(id, { shipment: shipmentData }, { new: true });
};
