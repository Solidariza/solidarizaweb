import { creators } from "@/data";
import { FaUserTie } from "react-icons/fa";

interface AboutMeCardProps {
  creator: (typeof creators)[number];
}

const AboutMeCard = ({ creator }: AboutMeCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 
          ease-in-out"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-primary">
        <FaUserTie className="inline text-2xl mb-1 mr-1" />
        SOBRE MIM
      </h3>
      <p className="text-gray-700">{creator.about}</p>
    </div>
  );
};

export default AboutMeCard;
