import { Request, Response } from "express";
import httpStatus from "http-status";

import cardPageService from "@/services/virtual-card-service";
import nameURLService from "@/services/name-url-service";
import metadaPageService from "@/services/metadata-page-service";

import { CardPageBody } from "@/utils/protocols";

export async function createCardPage(req: Request, res: Response) {
  const newCardPage: CardPageBody = req.body;
  try {
    const page = await cardPageService.createCardPage(newCardPage);
    return res.status(httpStatus.CREATED).send(page);
  } catch (error) {
    if(error.name === "ConflictError"){
      return res.status(httpStatus.CONFLICT).send(error);  
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}


export async function getCardPage(req: Request, res: Response) {
  const { name } = req.params;
  try {
    const cardPage = await nameURLService.getCardPageByNameURL(name);
    return res.status(httpStatus.OK).send(cardPage);
  } catch (error) {
    if(error.name === "NotFoundError"){
      return res.status(httpStatus.NOT_FOUND).send(error);  
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
