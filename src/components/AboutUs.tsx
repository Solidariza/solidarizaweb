import { creators } from "@/data";
import {
  AboutMeCard,
  EducationCard,
  ProfessionalExperienceCard,
  SideCard,
  SoftwaresCard,
} from "@/ui";

interface AboutUsProps {
  creator: (typeof creators)[number];
}

export const AboutUs = ({ creator }: AboutUsProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-start justify-center gap-6 p-6">
      <SideCard creator={creator} />
      <div className="flex flex-col gap-6 w-full md:w-3/4">
        <AboutMeCard creator={creator} />
        <EducationCard creator={creator} />
        <ProfessionalExperienceCard creator={creator} />
        <SoftwaresCard creator={creator} />
      </div>
    </div>
  );
};
