import { FaCode } from "react-icons/fa";

interface SoftwaresCardProps {
  softwares?: string[];
}

const SoftwaresCard = ({ softwares }: SoftwaresCardProps) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 
              ease-in-out"
    >
      <h3 className="text-xl font-lato font-black mb-2 text-blue-primary">
        <FaCode className="inline text-3xl mb-1 mr-1" /> SOFTWARES E TECNOLOGIAS
      </h3>
      {!softwares ? (
        <h3 className="w-full h-full text-2xl text-center font-lato text-blue-primary">
          Erro ao puxar dados, verifique sua conexão
        </h3>
      ) : (
        <ul className="grid grid-cols-3 gap-2 text-lg text-blue-primary list-disc list-inside">
          {softwares?.map((software, index) => (
            <li key={index}>{software}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SoftwaresCard;
