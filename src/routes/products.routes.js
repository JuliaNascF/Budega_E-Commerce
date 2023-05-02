import { Router }from "express"
import ProductsController from "../controllers/ProductsController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";

const productsRouter = Router();
const productsController = new ProductsController() ;


productsRouter.get("/:id", ensureAuthenticated, productsController.show);



export default productsRouter