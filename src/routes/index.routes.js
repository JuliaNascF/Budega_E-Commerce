import { Router } from "express";
import authRouter from "./auth.routes.js";
import productsRouter from "./products.routes.js";
import sessionsRouter from "./sessions.routes.js";
import cartRouter from "./cart.routes.js";


const router = Router();


router.use("/users",authRouter);
router.use("/products",productsRouter);
router.use("/cart", cartRouter);
router.use("/sessions", sessionsRouter)

export default router; 