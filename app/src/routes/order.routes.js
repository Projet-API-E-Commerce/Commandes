import { Router } from "express";

import { testController } from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.get("/", testController);

export default orderRouter;