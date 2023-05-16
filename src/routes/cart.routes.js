import { Router }from "express"
import CartController from "../controllers/CartController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";


const cartRouter = Router();
const cartController = new CartController() ;


cartRouter.post("/:id", ensureAuthenticated, cartController.addToCart);
cartRouter.post("/decrease/:id", ensureAuthenticated, cartController.decreaseQuantity);
cartRouter.get("/", ensureAuthenticated, cartController.getCart);




export default cartRouter