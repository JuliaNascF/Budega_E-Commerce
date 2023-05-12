import { db } from "../database/database.config.js";
import { ObjectId } from "mongodb";

class CartController {
    async addToCart(req, res) {
    const userId = req.userId;
    const objectId= await db.collection("products").findOne({
      _id: new ObjectId(req.params.id)});  
    try {
      const user = await db.collection("users").findOne({ _id: new ObjectId(userId) }, { projection: { cart: 1, _id: 0 } });
      if (!user) return res.status(404).send("Usuário não encontrado");

      const productAlreadyInCart = user.cart.items.find(
        (product) => product.productId.toString() === req.params.id
      );
      
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
    const user = await db.collection("users").findOne(
      { _id: new ObjectId(userId) },
      { projection: { cart: 1, _id: 0 } }
    );
    if (!user) return res.status(404).send("Usuário não encontrado");

    res.status(200).send(user.cart.items);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

}
export default CartController;