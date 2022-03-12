import sanityClient from "@sanity/client";

export const client = new sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-09-28",
  useCdn: false,
});
