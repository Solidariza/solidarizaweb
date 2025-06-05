import { RiGraduationCapFill } from "react-icons/ri";

interface EducationCardProps {
  educations: string[];
}

const EducationCard = ({ educations }: EducationCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 
              ease-in-out"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-primary">
        <RiGraduationCapFill className="inline text-3xl mb-1 mr-1.5" />
        EDUCAÇÃO
      </h3>
      <ul className="list-disc list-inside space-y-1 text-lg text-blue-primary">
        {educations.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
