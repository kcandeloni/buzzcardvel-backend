import Joi from "joi";

export const searchNameSchema = Joi.object({
  name: Joi.string().required(),
});