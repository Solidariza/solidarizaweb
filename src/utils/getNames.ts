import { creators } from "@/data";

export const getName = (name: string) => {
  return name.split(" ")[0];
};

export const getTwoNames = (name: string) => {
  return name.split(" ").slice(0, 2).join(" ");
};

export const getSlugToName = (slug: string): string => {
  return slug.replace(/([A-Z])/g, " $1").trim();
};

export const findCreatorByName = (name: string) => {
  return creators.find((creator) => creator.slug === name);
};
