import express, { json } from "express";
import cors from "cors";

import { prisma } from "./database/db";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/", async (req, res) => {
    const test = await prisma.cardPage.create({
      data: {
        name: "Kevin",
        linkedinURL: "https://www.linkedin.com/in/kevin-candeloni/",
        gitHubURL: "https://github.com/kcandeloni"
      }
    }
    );
    res.send(test).status(200);
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server running in port: ${port}`));
