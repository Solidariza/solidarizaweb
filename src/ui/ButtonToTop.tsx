import { scrollToTop } from "@/utils";
import { IoIosArrowUp } from "react-icons/io";

const ButtonToTop = () => {
  return (
    <button
      onClick={scrollToTop}
      className="flex flex-col items-center space-x-2 text-white font-medium hover:text-yellow-500 cursor-pointer
        transition duration-500 ease-in-out"
    >
      <IoIosArrowUp className="text-3xl ml-1" />
      <span className="-mt-2">Voltar ao topo</span>
    </button>
  );
};

export default ButtonToTop;
