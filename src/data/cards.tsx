import {
  FaBusAlt,
  FaLaptop,
  FaTheaterMasks,
  FaUserGraduate,
} from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { GiNewspaper, GiRetroController } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { RiContactsBook3Fill, RiTeamFill } from "react-icons/ri";

// Array de cards
export const cards = () => [
  {
    title: "Saúde",
    icon: <LuHeartHandshake size={85} />,
    href: "Saude",
  },
  {
    title: "Educação",
    icon: <FaUserGraduate size={85} />,
    href: "Educacao",
  },
  {
    title: "Tecnologia",
    icon: <FaLaptop size={85} />,
    href: "Tecnologia",
  },
  {
    title: "Jogos",
    icon: <GiRetroController size={85} />,
    href: "Jogos",
  },
  {
    title: "Rádio",
    icon: <FaRadio size={85} />,
    href: "Radio",
  },
  {
    title: "Notícias",
    icon: <GiNewspaper size={85} />,
    href: "Noticias",
  },
  {
    title: "Cultura",
    icon: <FaTheaterMasks size={85} />,
    href: "Cultura",
  },
  {
    title: "Transporte",
    icon: <FaBusAlt size={85} />,
    href: "Transporte",
  },
  {
    title: "Contato",
    icon: <RiContactsBook3Fill size={85} />,
    href: "Contato",
  },
  {
    title: "Sobre nós",
    icon: <RiTeamFill size={85} />,
    href: "SobreNos/GlawckHenrique",
  },
];

export const cardsData = cards();
export const cardsLength = cards().length;
