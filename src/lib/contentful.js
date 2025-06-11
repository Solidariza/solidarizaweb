import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space) {
  throw new Error("Space ID é obrigatório para usar o ContentFul!");
}
if (!accessToken) {
  throw new Error("Access Token é obrigatório para usar o ContentFul!");
}

export const clientContentful = createClient({
  space,
  accessToken,
});
