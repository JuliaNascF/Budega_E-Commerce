import { Router }from "express"
import OrderController from "../controllers/OrderController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";

const orderRouter = Router();
const orderController = new OrderController();


orderRouter.post("/", ensureAuthenticated, orderController.createOrder);
orderRouter.get("/pedidos",ensureAuthenticated, orderController.getUserOrders);

export default orderRouter;