import { Router }from "express"
import AuthController  from "../controllers/AuthController.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";
import { userSchema } from "../schemas/auth.schemas.js";
import { loginSchema } from "../schemas/auth.schemas.js";

const authRouter = Router();
const authController = new AuthController() ;

const validateUserSchema = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    next();
  };
  
  const validateLoginSchema = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    next();
  };
  
  
  authRouter.post("/", validateUserSchema, authController.signUp);
  
  authRouter.put("/", validateLoginSchema, authController.signIn);
  
  authRouter.delete("/", ensureAuthenticated, authController.signOut);


export default authRouter