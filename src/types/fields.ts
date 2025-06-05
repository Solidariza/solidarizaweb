import { Entry, EntrySkeletonType } from "contentful";

export interface informationsSee {
  softwares: string[];
  experiences: string[];
  educations: string[];
}

export interface userInfosFields extends EntrySkeletonType {
  faceUser: string;
  nameUser: string;
  instaUser: string;
  phoneUser: string;
  emailUser: string;
  photoUser?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  functionPosition: string;
  informationsSee: informationsSee;
}

export interface fields extends EntrySkeletonType {
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

export type userInfosEntry = Entry<userInfosFields>;
