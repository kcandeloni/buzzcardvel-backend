import express, { json } from "express";
import cors from "cors";
import { virtualCardRouter } from "./routers/virtual-card-router";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/health", (req, res) => {
    res.status(200).send("up");
  })
  .use(virtualCardRouter);

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server running in port: ${port}`));
