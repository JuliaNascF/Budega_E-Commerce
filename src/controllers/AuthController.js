import { db } from "../database/database.config.js";
import  bcrypt  from "bcryptjs";
import { ObjectId } from 'mongodb';


class AuthController {
  async signUp(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await db.collection("users").findOne({ email });
      if (user) return res.status(409).send("Esse e-mail já foi cadastrado!");
      const cart = { items: [] };
      const favorites = [];
   

      const hash = bcrypt.hashSync(password, 10);
      const result = await db.collection("users").insertOne({ name, email, password: hash, cart, favorites });
      const userId = result.insertedId;
      res.sendStatus(201);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async signIn(req, res) {
    console.log('Entrou na função signIn')
    const { email, password } = req.body;
    

    try {
      const user = await db.collection("users").findOne({ email });
      if (!user) return res.status(404).send("Esse e-mail não possui cadastro!");

      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (!isPasswordCorrect) return res.sendStatus(401);
      
      const session = await db.collection("sessions").insertOne({ userId: user._id });

      const { cart } = await db.collection("users").findOne(
        { _id: user._id },
        { projection: { cart: 1 } }
      );
      user.cart = cart;

      const { favorites } = await db.collection("users").findOne(
        { _id: user._id },
        { projection: { favorites: 1 } }
      );
      user.favorites = favorites;
  

       res.json({user});
    } catch (err) {
      res.status(500).send(err.message);
    }


  }

  async signOut(req, res) {
    const userId = req.userId; 
    console.log(userId)
    

    try {
     const result =  await db.collection("sessions").findOneAndDelete({ userId: new ObjectId(userId) });
     console.log(result)
      if (result && result.deletedCount === 0) {
        return res.status(404).send("Sessão não encontrada");
      }
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  
}

export default AuthController;
