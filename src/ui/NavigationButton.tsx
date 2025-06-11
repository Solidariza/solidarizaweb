import { handleClickChange } from "@/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  length?: number;
  isMobile: boolean;
  visibleCards?: number;
  direction: "prev" | "next";
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  length,
  isMobile,
  direction,
  setActiveIndex,
  visibleCards = 5,
}) => {
  const title = `Clique para ${
    direction === "prev" ? "voltar setor" : "passar setor"
  }`;
  const handleClick = () => {
    if (setActiveIndex && typeof length === "number") {
      handleClickChange(length, visibleCards, direction, setActiveIndex);
    }
  };
  return (
    <button
      title={title}
      aria-label={title}
      onClick={handleClick}
      className={`group z-30 cursor-pointer p-1 rounded-full flex justify-center items-center transition-all 
        duration-300 ease-in-out ${
          isMobile
            ? `min-w-12 min-h-12 w-12 h-12 bg-yellow-primary hover:bg-blue-quaternary`
            : `min-w-14 min-h-14 w-14 h-14 bg-blue-quaternary hover:bg-yellow-primary`
        }`}
    >
      {direction === "prev" ? (
        <IoIosArrowBack
          className={`w-full h-full -ml-1 transition-all ease-in-out duration-300 ${
            isMobile
              ? `text-blue-quaternary group-hover:text-white`
              : `text-white group-hover:text-blue-quaternary`
          }`}
        />
      ) : (
        <IoIosArrowForward
          className={`w-full h-full ml-1 transition-all ease-in-out duration-300 ${
            isMobile
              ? `text-blue-quaternary group-hover:text-white`
              : `text-white group-hover:text-blue-quaternary`
          }`}
        />
      )}
    </button>
  );
};

export default NavigationButton;
