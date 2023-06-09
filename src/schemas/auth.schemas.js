import Joi from "joi"

export const userSchema = Joi.object({
    name: Joi.string().required().error(new Error("O nome é obrigatório")),
    email: Joi.string().email().required().error(new Error("O email é inválido")),
    password: Joi.string().min(6).required().error(new Error("A senha deve ter pelo menos 6 caracteres")),
  });

  export const loginSchema = Joi.object({
    email: Joi.string().email().required().error(new Error("O email é inválido")),
    password: Joi.string().min(6).required().error(new Error("A senha deve ter pelo menos 6 caracteres")),
  });