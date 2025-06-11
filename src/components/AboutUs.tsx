import { creators } from "@/data";
import { userInfosEntry, userInfosFields } from "@/types";
import {
  AboutMeCard,
  EducationCard,
  ProfessionalExperienceCard,
  SideCard,
  SoftwaresCard,
} from "@/ui";

interface AboutUsProps {
  creator: (typeof creators)[number];
  userInfos: userInfosEntry | undefined;
}

export const AboutUs = ({ creator, userInfos }: AboutUsProps) => {
  const userInfosFields = userInfos?.fields as unknown as userInfosFields;
  const aboutMe = userInfosFields.aboutMeDescription as string | undefined;
  const photoUrl = (userInfosFields.photoUser as unknown as userInfosFields)
    .fields.file.url;
  const photoDescription = (
    userInfosFields.photoUser as unknown as userInfosFields
  ).fields.description;
  const blurPhotoUrl = (
    userInfosFields.photoBlurUser as unknown as userInfosFields
  ).fields.file.url;
  const blurPhotoDescription = (
    userInfosFields.photoBlurUser as unknown as userInfosFields
  ).fields.description;
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-start justify-center gap-6 p-6">
      <SideCard
        creator={creator}
        photoUrl={photoUrl}
        userInfos={userInfos}
        blurPhotoUrl={blurPhotoUrl}
        photoDescription={photoDescription}
        blurPhotoDescription={blurPhotoDescription}
      />
      <div className="flex flex-col gap-6 w-full md:w-3/4">
        <AboutMeCard aboutMe={aboutMe} />
        <EducationCard
          educations={userInfosFields.softwareEducationAndExperience.educations}
        />
        <ProfessionalExperienceCard
          experiences={
            userInfosFields.softwareEducationAndExperience.experiences
          }
        />
        <SoftwaresCard
          softwares={userInfosFields.softwareEducationAndExperience.softwares}
        />
      </div>
    </div>
  );
};
