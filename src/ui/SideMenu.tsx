"use client";
import { useEffect, useRef } from "react";
import IconMenu from "./IconMenu";
import List from "./List";
import Overlay from "./Overlay";
import SocialIcons from "./SocialIcons";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const SideMenu = ({ isOpen, closeMenu, toggleMenu }: SideMenuProps) => {
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  if (isOpen) {
    return (
      <ul
        ref={ulRef}
        className={`flex flex-col w-fit h-screen fixed inset-0 md:hidden justify-between 
          bg-yellow-primary z-50`}
      >
        <IconMenu isOpen={isOpen} closeMenu={closeMenu} />
        <List className="mx-1" closeMenu={closeMenu} customStyle />
        <SocialIcons className="mx-8 z-30 mb-8" customStyle />
        <Overlay closeMenu={closeMenu} />
      </ul>
    );
  }
  return <IconMenu isOpen={isOpen} toggleMenu={toggleMenu} />;
};

export default SideMenu;
