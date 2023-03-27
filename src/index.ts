import express, { json } from "express";
import cors from "cors";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/", (req, res) => {
    res.send("OK").status(200);
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server running in port: ${port}`));
