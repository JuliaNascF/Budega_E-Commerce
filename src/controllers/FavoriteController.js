import { db } from "../database/database.config.js";
import { ObjectId } from "mongodb";



class FavoriteController {
  async getFavorites(req, res) {
    const userId = req.userId;

    try {
      const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
      if (!user) return res.status(404).send("Usuário não encontrado!");

      const { favorites } = user;

      const products = await db.collection("products").find({ _id: { $in: favorites } }).toArray();

      res.json({ favorites: products });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async addToFavorites(req, res) {
    const userId = req.userId;
    const productId = new ObjectId(req.params.id);

    try {
      const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
      if (!user) return res.status(404).send("Usuário não encontrado!");

      const { favorites } = user;

      if (favorites.some(favoriteId => favoriteId.toString() === productId.toString())) {
        return res.status(409).send("Esse produto já está nos favoritos!");
      }

      // Adiciona o produto aos favoritos do usuário
      await db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        { $push: { favorites: productId } }
      );

      // Consulta para obter as informações completas do produto
      const product = await db.collection("products").findOne({ _id: productId });

      res.status(200).json({ product });
    } catch (err) {
      res.status(500).send(err.message);
    }

  }

  async removeFavorites(req, res) {
    const userId = req.userId;
  const productId = new ObjectId(req.params.id);

  try {
    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (!user) return res.status(404).send("Usuário não encontrado!");

    const { favorites } = user;

    const stringProductId = productId.toString();

    if (!favorites.some(favoriteId => favoriteId.toString() === stringProductId)) {
      return res.status(404).send("Produto não encontrado nos favoritos!");
    }

    // Remove o produto dos favoritos do usuário
    const updatedFavorites = favorites.filter(favoriteId => favoriteId.toString() !== stringProductId);

    // Atualiza o campo 'favorites' no documento do usuário
    await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { favorites: updatedFavorites } }
    );

    res.status(200).send("Produto removido dos favoritos com sucesso!");
  } catch (err) {
    res.status(500).send(err.message);
  }
  }

  async checkFavoriteStatus(req, res) {
    const userId = req.userId;
    const productId = new ObjectId(req.params.id);
  
    try {
      const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
      if (!user) return res.status(404).send("Usuário não encontrado!");
  
      const { favorites } = user;
  
      const stringProductId = productId.toString();
  
      if (favorites.some(favoriteId => favoriteId.toString() === stringProductId)) {
        res.status(200).json({ isFavorite: true });
      } else {
        res.status(200).json({ isFavorite: false });
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  

}
export default FavoriteController;