"use client";
import { List, Logo, MenuIcon, SideMenu, SocialIcons } from "@/ui";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav
      className="bg-gradient-to-r from-blue-primary via-blue-tertiary to-blue-quaternary p-4 fixed w-full top-0
      z-50"
    >
      <SideMenu isOpen={isOpen} closeMenu={closeMenu} />
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        <Logo />
        <List />
        <SocialIcons />
      </div>
    </nav>
  );
};
