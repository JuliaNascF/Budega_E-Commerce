import { db } from "../database/database.config.js";
import  productDocument  from "../database/CreateProducts.js"
import { ObjectId } from 'mongodb';

  class ProductsController {
    async show(req, res) {
      try {
       const product= await db.collection("products").findOne({
          _id: new ObjectId(req.params.id)
        });
        if (!product) {
          return res.status(404).send("Product não encontrado");
        }
        res.status(200).send(product);
      } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao exibir detalhes do produto");
      }
    }
  }
  
  export default ProductsController;
  