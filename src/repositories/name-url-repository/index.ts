import { prisma } from "@/database";

async function createPageURL(newPageURL: newPageURLParams){
  return prisma.cardPageURL.create({
    data: newPageURL,
  });
}

async function findNameURL(nameURL: string){
  return prisma.cardPageURL.findFirst({
    where: {
      nameURL,
    }
  });
}

async function getCardPageByNameURL(nameURL: string){
  return prisma.cardPageURL.findFirst({
    where: {
      nameURL,
    },
    include: {
      CardPage: {
        include: {
          MetadataPage: true,
        }
      },
    }
  });
}

export type newPageURLParams = {
  nameURL: string;
  cardPageId: number;
}

const cardPageURLRepository = {
  createPageURL,
  findNameURL,
  getCardPageByNameURL,
};

export default cardPageURLRepository;