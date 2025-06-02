import { EntrySkeletonType } from "contentful";

export interface ReceitaFields extends EntrySkeletonType {
  titulo: string;
  sys: {
    id: number;
  };
  imagem: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  descricao: string;
  categoria: string;
}
