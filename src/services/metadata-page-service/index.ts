import { getMetadata } from "../../utils/metadata";
import metadadaPageRepository from "../../repositories/metadata-page-repository";

type metadataParams = {
  link: string;
  cardPageId: number;
}

async function createMetadataPage({link, cardPageId}: metadataParams) {
  const { title, description, image } = await getMetadata(link);
  metadadaPageRepository.createMetadataPage({title, description, image, cardPageId});
}

const metadaPageService = {
  createMetadataPage,
};

export default metadaPageService;
