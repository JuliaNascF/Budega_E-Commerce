import { Router }from "express"
import AuthController  from "../controllers/auth.controllers.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";

const authRouter = Router();
const authController = new AuthController() ;


authRouter.post("/", authController.signUp);

authRouter.put("/", authController.signIn);


authRouter.delete("/", ensureAuthenticated, authController.signOut);


export default authRouter