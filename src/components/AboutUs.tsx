import { creators } from "@/data";
import { informationsSee, userInfosEntry, userInfosFields } from "@/types";
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
  const aboutMe = userInfos?.fields.aboutMe as string | undefined;
  const infoSee = userInfos?.fields
    .informationsSee as unknown as informationsSee;
  const photoUrl = (userInfos?.fields.photoUser as unknown as userInfosFields)
    .fields.file.url;
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-start justify-center gap-6 p-6">
      <SideCard photoUrl={photoUrl} creator={creator} userInfos={userInfos} />
      <div className="flex flex-col gap-6 w-full md:w-3/4">
        <AboutMeCard aboutMe={aboutMe} />
        <EducationCard educations={infoSee.educations} />
        <ProfessionalExperienceCard experiences={infoSee.experiences} />
        <SoftwaresCard softwares={infoSee.softwares} />
      </div>
    </div>
  );
};
