
const db = require('../config/db');

async function getAllOrders() {
    try {
        return await db.executeQuery('SELECT * FROM orders');
    } catch (error) {
        throw error;
    }
}

// Implémentez les autres fonctions de la même manière
// ...

module.exports = {
    getAllOrders,
    // ... autres fonctions
};
