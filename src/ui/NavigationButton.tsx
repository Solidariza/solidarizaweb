import { handleClickChange } from "@/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  length?: number;
  direction: "prev" | "next";
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  setActiveIndex,
  length,
}) => {
  const handleClick = () => {
    if (setActiveIndex && typeof length === "number") {
      handleClickChange(setActiveIndex, direction, length);
    }
  };
  return (
    <button
      onClick={handleClick}
      title={`Clique para ${
        direction === "prev" ? "voltar setor" : "passar setor"
      }`}
      className="bg-blue-quaternary group hover:bg-yellow-primary w-14 h-14 min-w-14 min-h-14 z-30 cursor-pointer p-1 
        rounded-full flex justify-center items-center transition-all duration-300 ease-in-out"
    >
      {direction === "prev" ? (
        <IoIosArrowBack
          className="text-white group-hover:text-blue-quaternary w-full h-full -ml-1
            transition-all ease-in-out duration-300"
        />
      ) : (
        <IoIosArrowForward
          className="text-white group-hover:text-blue-quaternary w-full h-full ml-1
            transition-all ease-in-out duration-300"
        />
      )}
    </button>
  );
};

export default NavigationButton;
