import { Request, Response } from "express";
import httpStatus from "http-status";

import cardPageService from "@/services/virtual-card-service";
import { CardPageBody } from "@/utils/protocols";

export async function createCardPage(req: Request, res: Response) {
  const newCardPage: CardPageBody = req.body;

  try {
    const page = await cardPageService.createCardPage(newCardPage);
    return res.status(httpStatus.CREATED).send(page);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
