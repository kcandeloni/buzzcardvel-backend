import { Router } from "express";

import { 
  createCardPage, 
  getCardPage, 
  getAllCardPages } from "../controllers/virtual-card-controller";
import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { newCardPageSchema, searchNameSchema } from "../schemas";

export const virtualCardRouter = Router();

virtualCardRouter
  .post("/create", validateBody(newCardPageSchema), createCardPage)
  .get("/get/:name", validateParams(searchNameSchema), getCardPage)
  .get("/card-page/all", getAllCardPages);
