import cardPageRepository, { newCardPageParams } from "@/repositories/virtual-card-repository";
import nameURLService from "../name-url-service";

async function createCardPage(data: newCardPageParams) {
  const { name } = data;
  
  const newCardPage = await cardPageRepository.createCardPage(data);

  const newNameURL = await nameURLService.createNameURL({name, cardPageId: newCardPage.id})

  return newNameURL;
}

const cardPageService = {
  createCardPage,
};

export default cardPageService;
