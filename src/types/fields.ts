import { Entry, EntrySkeletonType } from "contentful";

export interface userInfosFields extends EntrySkeletonType {
  faceUser: string;
  nameUser: string;
  instaUser: string;
  phoneUser: string;
  emailUser: string;
  functionPosition: string;
  aboutMeDescription: string;
  photoUser?: AssetFields;
  photoBlurUser?: AssetFields;
  softwareEducationAndExperience: {
    softwares: string[];
    experiences: string[];
    educations: string[];
  };
}

export interface AssetFields {
  fields: {
    file: {
      url: string;
    };
    description: string;
  };
}

export interface partnershipFields extends EntrySkeletonType {
  fields: {
    linkPartnership: string;
    photoPartnership: AssetFields;
  };
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

export type partnership = Entry<partnershipFields>;
export type userInfosEntry = Entry<userInfosFields>;
