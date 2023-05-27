import { MongoClient } from "mongodb";
import productDocument from "./CreateProducts.js"
import dotenv from 'dotenv';
dotenv.config();

export const mongoClient = new MongoClient(process.env.DATABASE);

mongoClient.connect()
.then(async () => {
  console.log("MongoDB conectado");
  
  const collectionExists = await db.listCollections({ name: "products" }).hasNext();

  if (!collectionExists) {
    await db.createCollection("products");
    await db.collection("products").insertMany(productDocument);
    console.log("Produtos inseridos com sucesso na coleção products");
  }
  



})
.catch((err) => {
  console.log("Erro ao conectar ao MongoDB: ", err);
});

export const db = mongoClient.db()