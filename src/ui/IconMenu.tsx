import { HTMLAttributes } from "react";

interface IconMenuProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  closeMenu?: () => void;
  toggleMenu?: () => void;
}

const IconMenu = ({
  isOpen,
  closeMenu,
  toggleMenu,
  ...props
}: IconMenuProps) => {
  const title = "Abrir menu lateral";
  const handleClick = toggleMenu || closeMenu;
  return (
    <div
      {...props}
      title={title}
      aria-label={title}
      {...(handleClick && { onClick: handleClick })}
      className={`flex flex-col relative justify-between items-center rounded-full md:hidden p-2
        transition-all duration-300 ease-in-out cursor-pointer group ${
          isOpen
            ? `w-8 h-8 hover:bg-blue-quaternary hover:scale-105 hover:rotate-90 mt-4 ml-4`
            : `w-10 h-10 hover:bg-yellow-primary`
        }`}
    >
      <span
        className={`w-9/12 h-0.8 top-1/2 left-1/2 border-2 border-white bg-white rounded-md transition-all duration-300 
        ease-in-out ${
          isOpen
            ? `absolute rotate-45 -translate-x-1/2 -translate-y-1/2`
            : `self-start group-hover:w-full group-hover:h-1 group-hover:bg-blue-quaternary group-hover:border-blue-quaternary`
        }`}
      />
      <span
        className={`w-full h-0.8 border-2 border-white bg-white rounded-md group-hover:bg-blue-quaternary
        group-hover:border-blue-quaternary group-hover:h-1 group-hover:px-3.5
          ${isOpen && `hidden`}`}
      />
      <span
        className={`w-9/12 h-0.8 top-1/2 left-1/2 border-2 border-white bg-white rounded-md transition-all duration-300  
        ease-in-out ${
          isOpen
            ? `absolute -rotate-45 -translate-x-1/2 -translate-y-1/2`
            : `w-full group-hover:h-1 group-hover:bg-blue-quaternary group-hover:border-blue-quaternary`
        }`}
      />
    </div>
  );
};

export default IconMenu;
