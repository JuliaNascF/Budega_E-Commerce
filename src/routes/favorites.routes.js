import { Router }from "express"
import FavoriteController from "../controllers/FavoriteController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";


const favoritesRouter = Router();
const favoriteController = new FavoriteController() ;


favoritesRouter.post("/:id", ensureAuthenticated, favoriteController.addToFavorites);
favoritesRouter.get("/", ensureAuthenticated, favoriteController.getFavorites);
favoritesRouter.delete("/:id", ensureAuthenticated, favoriteController.removeFavorites);





export default favoritesRouter