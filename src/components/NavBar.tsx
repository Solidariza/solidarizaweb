"use client";
import { List, Logo, SideMenu, SocialIcons } from "@/ui";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="flex justify-between items-center max-w-full mx-auto bg-gradient-to-r from-blue-primary 
      via-blue-tertiary to-blue-quaternary p-4 px-4 md:px-10 fixed w-full top-0 z-50"
    >
      <SideMenu closeMenu={closeMenu} toggleMenu={toggleMenu} isOpen={isOpen} />
      <Logo />
      <List className="hidden" />
      <SocialIcons />
    </nav>
  );
};
