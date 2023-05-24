import { db } from "../database/database.config.js";
import { ObjectId } from 'mongodb';


class OrderController {
  async createOrder(req, res) {
    const userId = req.userId;
    const { cartItems, deliveryMethod, paymentMethod, totalPrice } = req.body;
    
    
    try {
      const order = {
        userId: new ObjectId(userId),
        cartItems,
        deliveryMethod,
        paymentMethod,
        totalPrice
      };
      
      await db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        { $set: { cart: { items: [] } } } 
      );
      const result = await db.collection("orders").insertOne(order);
      
      if (result.insertedCount !== 1) {
        return res.status(500).send("Erro ao salvar o pedido.");
      }
  
     
    
    
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getUserOrders(req, res) {
    const userId = req.userId;

    try {
      const orders = await db.collection("orders").find({ userId: new ObjectId(userId) }).toArray();

      res.json(orders);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default OrderController;