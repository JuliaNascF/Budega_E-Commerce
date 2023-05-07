import { Router }from "express"
import ProductsController from "../controllers/ProductsController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";

const productsRouter = Router();
const productsController = new ProductsController() ;


productsRouter.get("/", productsController.index);
productsRouter.get("/id/:id", productsController.show);
productsRouter.get("/:category", productsController.category);



export default productsRouter