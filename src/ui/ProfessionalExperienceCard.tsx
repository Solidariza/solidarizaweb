import { creators } from "@/data";
import { MdWork } from "react-icons/md";

interface ProfessionalExperienceCardProps {
  creator: (typeof creators)[number];
}

const ProfessionalExperienceCard = ({
  creator,
}: ProfessionalExperienceCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 
              ease-in-out"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-primary">
        <MdWork className="inline text-3xl mb-1 -mt-1" /> EXPERIÊNCIA
        PROFISSIONAL
      </h3>
      <ul className="list-disc list-inside space-y-1 text-lg text-blue-primary">
        {creator.experience?.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalExperienceCard;
