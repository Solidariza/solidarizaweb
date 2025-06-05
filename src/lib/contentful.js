import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    "Space ID e Access Token são obrigatórios para usar o ContentFul!"
  );
}

export const clientContentful = createClient({
  space,
  accessToken,
});
