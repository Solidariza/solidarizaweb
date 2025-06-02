import Image, { StaticImageData } from "next/image";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

interface RecipeCardProps {
  img: StaticImageData | string;
  name: string;
  id: number;
}

const RecipeCard = ({ img, name }: RecipeCardProps) => {
  return (
    <div
      className="flex flex-col w-72 h-72 justify-center items-center p-4 rounded-lg bg-white hover:scale-105 
      transition-all duration-300 ease-in-out"
    >
      <Image src={img} alt={name} className=" bg-blue-primary rounded-md" />
      <h2 className="text-2xl text-white font-prata text-center font-bold tracking-wider">
        {name}
      </h2>
      <div className="flex space-x-1">
        <button className="bg-white p-1 rounded-md h-fit mb-5 cursor-pointer group">
          <FaInstagramSquare className="w-8 h-8 text-blue-primary" />
        </button>
        <button className="bg-white p-1 rounded-md h-fit mb-5 cursor-pointer group">
          <FaYoutube className="w-8 h-8 text-blue-primary hover:text-red-500 transition-all duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
