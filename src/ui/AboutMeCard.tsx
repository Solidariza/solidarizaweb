import { FaUserTie } from "react-icons/fa";

interface AboutMeCardProps {
  aboutMe: string | undefined;
}

const AboutMeCard = ({ aboutMe }: AboutMeCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 
          ease-in-out"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-primary">
        <FaUserTie className="inline text-2xl mb-1 mr-1" />
        SOBRE MIM
      </h3>
      <p className="text-gray-700">
        {!aboutMe
          ? "Erro ao puxar dados, verifique sua conexão"
          : aboutMe || "Sem informações sobre mim."}
      </p>
    </div>
  );
};

export default AboutMeCard;
