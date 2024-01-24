// order.routes.js

import express from 'express';
/*import orderController from '../controllers/order.controller';*/

const orderRouter = express.Router();
orderRouter.routerName = "orderRouter";

orderRouter.get("/test", (req, res) => res.send("hello world"))

/*
router.post('/create', orderController.createOrder);
router.get('/history/client/:clientId', orderController.getOrderHistoryByClient);
router.get('/history/product/:productId', orderController.getOrderHistoryByProduct);
 */

export default orderRouter;
