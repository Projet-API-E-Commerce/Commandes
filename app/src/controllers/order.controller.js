// import model from "model";
import {Op} from "sequelize";
import Order from "../models/order.model.js";

export const GetOrders = async (req, res) => {
    try {
        const {count, rows: orders} = await Order.findAndCountAll();
        if (!count) {
            return res.status(404).send("Aucune Commande trouvée.");
        }
        return res.status(200).send(orders);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export const GetOrder = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send("Identifiant invalide");
        }
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).send("Commande non trouvée.");
        }
        return res.status(200).send(order);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export const CreateOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        return res.status(201).send(newOrder);
    } catch (err) {
        return res.status(400).send(err.message);
    }
}

export const UpdateOrder = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send("Identifiant invalide");
        }

        const [updated] = await Order.update(req.body, {
            where: { id: id }
        });
        if (!updated) {
            return res.status(404).send('Commande non trouvée');
        }
        const updatedOrder = await Order.findByPk(id);
        return res.status(200).send(updatedOrder);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export const DeleteOrders = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).send("Identifiant invalide");
        }

        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).send('Commande non trouvée');
        }
        await order.destroy();
        return res.status(204).send();
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export const GetClientHistory = async (req, res) => {
    try {
        const clientId = parseInt(req.params.id);
        if (isNaN(clientId)) {
            return res.status(400).send("Identifiant de client invalide");
        }

        const orders = await Order.findAll({
            where: {
                client_id: clientId,
            }
        });

        if (orders.length === 0) {
            return res.status(404).send("Aucune commande trouvée pour ce client.");
        }

        return res.status(200).send(orders);
    } catch (err) {
        return res.status(500).send(err.message);
    }
};

export const GetOrdersByProductId = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            return res.status(400).send("Identifiant de produit invalide");
        }
        
        const orders = await Order.findAll({
            where: {
                products: {
                    [Op.contains]: [productId]
                }
            }
        });

        if (orders.length === 0) {
            return res.status(404).send("Aucune commande trouvée avec ce produit.");
        }

        return res.status(200).send(orders);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export const PayOrder = async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        if (isNaN(orderId)) {
            return res.status(400).send("Identifiant de commande invalide");
        }

        const order = await Order.findByPk(orderId);
        if (!order) {
            return res.status(404).send("Commande non trouvée.");
        }

        let totalAmount = 0;
        for (const productId of order.products) {
            const productResponse = await axios.get(`/product/:id`);
            totalAmount += productResponse.data.price;
        }

        return res.status(200).send({ message: "Paiement effectué", totalAmount: totalAmount });
    } catch (err) {
        return res.status(500).send(err.message);
    }
};


/*/product/modify/{id}*/

export default {
    GetOrders, GetOrder, CreateOrder, UpdateOrder, DeleteOrders, GetClientHistory, GetOrdersByProductId, PayOrder,
};