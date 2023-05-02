import { MongoClient } from "mongodb";
import productDocument from "./CreateProducts.js"



const mongoClient = new MongoClient("mongodb+srv://JuliaNascF:mommy1212@cluster0.hq1sele.mongodb.net/Budega?retryWrites=true&w=majority")
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