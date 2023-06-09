
import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js"
import dotenv from "dotenv"






const app = express();
app.use(express.json());
app.use(cors()); 
app.use(router);
dotenv.config()




const port = process.env.PORT || 5005
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
