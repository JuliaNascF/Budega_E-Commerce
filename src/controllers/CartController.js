import { db } from "../database/database.config.js";
import { ObjectId } from "mongodb";

class CartController {
    async addToCart(req, res) {
      const userId = req.userId;
      const productId = new ObjectId(req.params.id);
    
      try {
        const user = await db.collection("users").findOne(
          { _id: new ObjectId(userId) },
          { projection: { cart: 1, _id: 0 } }
        );
        if (!user) return res.status(404).send("Usuário não encontrado");
    
        const productAlreadyInCart = user.cart.items.find((item) => {
          if (item.productId && item.productId.toString() === productId.toString()) {
            return true;
          }
          return false;
        });
    
        let product;
    
        if (productAlreadyInCart) {
          if (productAlreadyInCart.quantity >= 10) {
            return res
              .status(400)
              .send("Desculpe, só é possível adicionar 10 unidades de cada produto ao carrinho");
          }
    
          await db.collection("users").updateOne(
            { _id: new ObjectId(userId), "cart.items.productId": productId },
            { $inc: { "cart.items.$.quantity": 1 } }
          );
          console.log(productAlreadyInCart);
    
          // Consulta para obter as informações completas do produto
          product = await db.collection("products").findOne({ _id: productId });
        } else {
          await db.collection("users").updateOne(
            { _id: new ObjectId(userId) },
            { $push: { "cart.items": { productId: productId, quantity: 1 } } }
          );
          console.log("prod diferente");
    
          // Consulta para obter as informações completas do produto
          product = await db.collection("products").findOne({ _id: productId });
        }
    
        res.status(200).json({ product });
      } catch (err) {
        res.status(500).send(err.message);
      }
    }

  async decreaseQuantity(req, res) {
  const userId = req.userId;
  const productId = req.params.id;

  try {
    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (!user) return res.status(404).send("Usuário não encontrado");

    const cartItem = user.cart.items.find(item => item.productId.equals(new ObjectId(productId)));

    if (!cartItem) return res.status(404).send("Produto não encontrado no carrinho");

    if (cartItem.quantity <= 1) {
      await db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        { $pull: { "cart.items": { productId: new ObjectId(productId) } } }
      );
    } else {
      await db.collection("users").updateOne(
        { _id: new ObjectId(userId), "cart.items.productId": new ObjectId(productId) },
        { $inc: { "cart.items.$.quantity": -1 } }
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

    const cartItems = await Promise.all(
      user.cart.items.map(async (item) => {
        const product = await db.collection("products").findOne({ _id: item.productId });
        return { ...item, product: product };
      })
    );

    let sum = 0;
    cartItems.forEach((item) => {
      const quantity = item.quantity || 1;
      const price = item.product.price.cents;
      const totalPrice = quantity * price;
      sum += totalPrice;
    });

   const totalPriceFormatted = sum.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
    res.status(200).json({ cartItems, total: `R$ ${totalPriceFormatted}` });

  } catch (err) {
    res.status(500).send(err.message);
  }
}

}
export default CartController;