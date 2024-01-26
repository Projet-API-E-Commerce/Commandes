// order.routes.js

import express from 'express';
import {GetOrders, GetOrder, CreateOrder, UpdateOrder, DeleteOrders, GetClientHistory, GetOrdersByProductId} from "../controllers/order.controller.js";

const orderRouter = express.Router();
orderRouter.routerName = "orderRouter";

orderRouter.get("/test", (req, res) => res.send("hello world"))

orderRouter.get("/orders", GetOrders);

orderRouter.get("/orders/:id", GetOrder);

orderRouter.get('/orders/client/:id', GetClientHistory);

orderRouter.get('/orders/product/:id', GetOrdersByProductId);

orderRouter.patch('/orders/:id', UpdateOrder);

orderRouter.post("/orders", CreateOrder);

orderRouter.put("/orders/:id", UpdateOrder);

orderRouter.delete("/orders/:id", DeleteOrders);


export default orderRouter;
