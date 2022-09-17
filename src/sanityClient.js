import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  apiVersion: "2022-09-09",
  dataset: "production",
  useCdn: true,
  token: process.env.REACT_APP_CLIENT_API,
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
