import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "v2",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2023-03-12",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getProjects = () => {
  const query = groq`*[_type == "project"] | order(date desc){
    "id": _id,
    title,
    description,
    date,
    medium,
    image
  }`;
  return client.fetch(query);
};
