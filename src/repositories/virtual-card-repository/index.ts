import { prisma } from "@/database";
import { CardPage } from "@prisma/client";

export type newCardPageParams = Omit<CardPage, "createdAt" | "updatedAt" | "id">;

async function createCardPage(newCardPage: newCardPageParams): Promise<CardPage>{
  return prisma.cardPage.create({
    data: newCardPage,
  });
}

async function getAllCardPages(){
  return prisma.cardPage.findMany({
    include: {
      MetadataPage: true,
      CardPageURL: true,
    }
  });
}


const cardPageRepository = {
  createCardPage,
  getAllCardPages,
};

export default cardPageRepository;