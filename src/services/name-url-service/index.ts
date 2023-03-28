import cardPageURLRepository from "@/repositories/name-url-repository";
import { conflictError } from "@/utils/errors";

type newNameURL = {
  name: string;
  cardPageId: number;
}

function normalizeNameURL(name: string){
  const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return normalized.replace(/\s+/g, ".").replace(/[^a-z0-9.]/g, "");
}

async function checkName(nameURL: string){
  const check = await cardPageURLRepository.findNameURL(nameURL);
  return check;
}

async function createNameURL(data: newNameURL) {
  const { name, cardPageId } = data;

  let nameURL = normalizeNameURL(name); 

  if(await checkName(nameURL)){
    nameURL += Math.floor(Math.random() * 9999);
  }

  if(await checkName(nameURL)){
    throw conflictError("failed to create nameURL");
  }

  const newNameURL = await cardPageURLRepository.createPageURL({ nameURL, cardPageId});

  return newNameURL;
}

const nameURLService = {
  createNameURL,
};

export default nameURLService;
