import cardPageRepository from "@/repositories/virtual-card-repository";

import { newCardPageParams } from "@/repositories/virtual-card-repository";

async function createCardPage(data: newCardPageParams) {
  const newCardPage = await cardPageRepository.createCardPage(data);
  
  return newCardPage;
}

const cardPageService = {
  createCardPage,
};

export default cardPageService;
