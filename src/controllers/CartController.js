import { db } from "../database/database.config.js";
import { ObjectId } from "mongodb";

class CartController {
   
  async addToCart(req, res) {
    const userId = req.userId; // Assume que o objeto req tem um campo userId com o ID do usuário
    const objectId= await db.collection("products").findOne({
      _id: new ObjectId(req.params.id)});   // Assume que o ID do produto está nos parâmetros da URL

    try {
      // Encontra o usuário e seu carrinho com a projeção cart.items.productId
      const user = await db.collection("users").findOne({ _id: new ObjectId(userId) }, { projection: { cart: 1, _id: 0 } });
      if (!user) return res.status(404).send("Usuário não encontrado");

      const productAlreadyInCart = user.cart.items.find(
        (product) => product.productId.toString() === objectId.toString()
      );

      // Se o produto já estiver no carrinho, incrementa a quantidade
      if (productAlreadyInCart) {
        if (productAlreadyInCart.quantity >= 10) {
          return res
            .status(400)
            .send("Desculpe, só é possível adicionar 10 unidades de cada produto ao carrinho");
        }

        await db.collection("users").updateOne(
          { _id: new ObjectId(userId), "cart.items.productId": objectId },
          { $inc: { "cart.items.$.quantity": 1 } }
        );
      } else {
        // Se o produto não estiver no carrinho, adiciona um novo item
        await db.collection("users").updateOne(
          { _id: new ObjectId(userId) },
          { $push: { "cart.items": { productId: objectId, quantity: 1 } } }
        );
      }

      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async  getCart(req, res) {
    const userId = req.userId; 
  
    try {
      const { cart } = await db.collection("users").findOne(
        { _id: new ObjectId(userId) },
        { projection: { cart: 1 } }
      );
  
      const productsInCart = await Promise.all(
        cart.map(async (cartItem) => {
          const { productId, quantity } = cartItem;
          const product = await db.collection("products").findOne(
            { _id: new ObjectId(productId) },
            { projection: { _id: 0 } }
          );
          return { product, quantity };
        })
      );
  
      res.json(productsInCart);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  
}

export default CartController;