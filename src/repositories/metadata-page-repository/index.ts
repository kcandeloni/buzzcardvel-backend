import { prisma } from "../../database";
import { MetadataPage } from "@prisma/client";

type newMetadataParams = Omit<MetadataPage, "id" | "createdAt" | "updatedAt">

async function createMetadataPage(metadataParams: newMetadataParams){
  return prisma.metadataPage.create({
    data: metadataParams
  });
}

const metadadaPageRepository = {
  createMetadataPage,
};

export default metadadaPageRepository;
