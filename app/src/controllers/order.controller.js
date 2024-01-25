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
        const { status, products, client_id } = req.body;
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

export default {
    GetOrders, GetOrder, CreateOrder, UpdateOrder, DeleteOrders
};