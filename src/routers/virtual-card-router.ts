import { Router } from "express";

import { createCardPage, getCardPage } from "@/controllers/virtual-card-controller";
import { validateBody, validateParams } from "@/middlewares/validation-middleware";
import { newCardPageSchema, searchNameSchema } from "@/schemas";

const virtualCardRouter = Router();

virtualCardRouter
  .post("/create", validateBody(newCardPageSchema), createCardPage)
  .get("/:name", validateParams(searchNameSchema), getCardPage);

export default virtualCardRouter;