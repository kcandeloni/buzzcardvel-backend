import Joi from "joi";

export const newCardPageSchema = Joi.object({
  name: Joi.string().min(3).required(),
  linkedinURL: Joi.string().uri().required(),
  gitHubURL: Joi.string().uri().required(),
});