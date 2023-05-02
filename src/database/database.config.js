import { MongoClient } from "mongodb";



const mongoClient = new MongoClient("mongodb+srv://JuliaNascF:mommy1212@cluster0.hq1sele.mongodb.net/Budega?retryWrites=true&w=majority")
mongoClient.connect()
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB: ", err);
  });

export const db = mongoClient.db()