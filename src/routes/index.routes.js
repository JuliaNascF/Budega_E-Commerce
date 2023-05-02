import { Router } from "express";
import authRouter from "./auth.routes.js";


const router = Router();


router.use("/users",authRouter);

export default router; 