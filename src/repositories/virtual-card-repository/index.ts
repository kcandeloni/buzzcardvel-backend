import { prisma } from "@/database";
import { CardPage } from "@prisma/client";

export type newCardPageParams = Omit<CardPage, "createdAt" | "updatedAt" | "id">;

async function createCardPage(newCardPage: newCardPageParams): Promise<CardPage>{
  return prisma.cardPage.create({
    data: newCardPage,
  });
}

const cardPageRepository = {
  createCardPage,
};

export default cardPageRepository;