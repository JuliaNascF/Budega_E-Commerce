import { Router } from "express";
import authRouter from "./auth.routes.js";
import productsRouter from "./products.routes.js";


const router = Router();


router.use("/users",authRouter);
router.use("/products",productsRouter);

export default router; 