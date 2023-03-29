import cardPageRepository, { newCardPageParams } from "@/repositories/virtual-card-repository";
import nameURLService from "../name-url-service";
import metadaPageService from "../metadata-page-service";

async function createCardPage(data: newCardPageParams) {
  const { name } = data;
  
  const newCardPage = await cardPageRepository.createCardPage(data);

  const newNameURL = await nameURLService.createNameURL({name, cardPageId: newCardPage.id})

  metadaPageService.createMetadataPage({link: data.gitHubURL, cardPageId: newCardPage.id})

  return newNameURL;
}

const cardPageService = {
  createCardPage,
};

export default cardPageService;
