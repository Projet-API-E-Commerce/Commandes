const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config/config');

const Order = sequelize.define('Order', {
    // ... autres champs de la commande ...
    shipmentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shipmentMethod: {
        type: DataTypes.STRING,
    },
    trackingNumber: {
        type: DataTypes.STRING,
    },
    shipmentStatus: {
        type: DataTypes.STRING,
    },
    // ... autres champs de la commande ...
}, {
    // Options supplémentaires
});

module.exports = Order;
