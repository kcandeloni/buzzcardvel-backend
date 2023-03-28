import { Router } from "express";

import { createCardPage } from "@/controllers/virtual-card-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { newCardPageSchema } from "@/schemas";

const virtualCardRouter = Router();

virtualCardRouter
  .post("/create", validateBody(newCardPageSchema), createCardPage)
  .get("/get", );

export default virtualCardRouter;