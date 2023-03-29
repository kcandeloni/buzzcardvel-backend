import urlMetadata from "url-metadata";

export async function getMetadata(link: string) {
  const data = await urlMetadata(link)
  return data;
}
