import jwt from 'jsonwebtoken';
import authConfig from "../configs/auth.js"



async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send('Token não informado');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);
    console.log(token);
    console.log(decoded); 
    if (decoded.userId) {
      req.userId = decoded.userId;
      
      return next();
    } else {
      return res.status(401).send('Token inválido');
    }
  } catch (err) {
    return res.status(401).send('Token inválido');
  }
}



  export default ensureAuthenticated