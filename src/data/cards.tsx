import {
  FaBusAlt,
  FaLaptop,
  FaTheaterMasks,
  FaUserGraduate,
} from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { GiNewspaper } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { LuHeartHandshake } from "react-icons/lu";
import { RiContactsBook3Fill, RiTeamFill } from "react-icons/ri";

// Array de cards
export const cards = (size: number = 85) => [
  {
    title: "Saúde",
    icon: <LuHeartHandshake size={size} />,
    href: "Saude",
  },
  {
    title: "Educação",
    icon: <FaUserGraduate size={size} />,
    href: "Educacao",
  },
  {
    title: "Tecnologia",
    icon: <FaLaptop size={size} />,
    href: "Tecnologia",
  },
  {
    title: "Jogos",
    icon: <IoLogoGameControllerB size={size} />,
    href: "Jogos",
  },
  {
    title: "Rádio",
    icon: <FaRadio size={size} />,
    href: "Radio",
  },
  {
    title: "Notícias",
    icon: <GiNewspaper size={size} />,
    href: "Noticias",
  },
  {
    title: "Cultura",
    icon: <FaTheaterMasks size={size} />,
    href: "Cultura",
  },
  {
    title: "Transporte",
    icon: <FaBusAlt size={size} />,
    href: "Transporte",
  },
  {
    title: "Contato",
    icon: <RiContactsBook3Fill size={size} />,
    href: "Contato",
  },
  {
    title: "Sobre nós",
    icon: <RiTeamFill size={size} />,
    href: "SobreNos/GlawckHenrique",
  },
];

export const cardsLength = cards().length;
