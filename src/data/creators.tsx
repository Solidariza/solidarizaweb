import dartVader from "aboutUs/dartvaderimage.jpeg";
import imgFabio from "aboutUs/fabio.jpg";
import imgGlawck from "aboutUs/glawck.png";
import imgMateusAugusto from "aboutUs/mateusAugusto.jpg";
import mcLovin from "aboutUs/mclovin.jpg";

const generateEducation = (
  institution: string = "Univale",
  description: string = "– Análise e Desenvolvimento de Sistemas",
  startYear: number = 2022,
  endYear: number = 2025
) => {
  return `${institution} (${startYear}–${endYear}) ${description}(${studyingOrNot(
    endYear as number
  )})`;
};

const studyingOrNot = (endYear: number) => {
  const currentYear = new Date().getFullYear();
  if (currentYear > endYear) {
    return "Completo";
  } else {
    return "Cursando";
  }
};

export const creators = [
  {
    img: imgGlawck,
    softwares: [
      "Dart",
      "Canva",
      "React",
      "Python",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "React Native",
    ],
    experience: [
      "Nil Lanches – Cardápio móvel",
      "Nete Beach – Locadora de casas de veraneio",
      "Ouzze – Sistema de estoque e controle de gastos",
      "Check-Point – Aplicativo de presença no transporte",
    ],
    education: [
      "Colégio Prof. Reni Correia Gamper (2020–2022) – Técnico em Informática (Completo)",
      generateEducation(),
    ],
    url: "/GlawckHenrique",
    slug: "GlawckHenrique",
    phone: "+55 (43) 9 9810-8328",
    function: "Chefe de Grupo(PIO)",
    email: "glawcksilva8@gmail.com",
    name: "Glawck Henrique da Silva",
    face: "https://www.facebook.com/glawck.silva",
    insta: "https://www.instagram.com/glawck_silva",
    about: `Olá! Sou Glawck, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Atualmente, estou 
      me especializando em programação de aplicativos e sites voltados para utilidade pública. Meu foco é criar soluções 
      que tornem a vida das pessoas mais fácil e prática. Estou sempre em busca de novos desafios e oportunidades para 
      aprender e crescer na área de tecnologia.`,
  },
  {
    softwares: [
      "Git",
      "Dart",
      "Canva",
      "MySQL",
      "Figma",
      "React",
      "GitHub",
      "Delphi",
      "Python",
      "Flutter",
      "Postman",
      "DBeaver",
      "JavaScript",
      "TypeScript",
      "PostgresSQL",
      "TortoiseSVN",
      "React Native",
      "Visual Studio",
      "Visual Studio Code",
    ],
    experience: [
      "BS Car - Elétrica Automotiva",
      "Mecânica Reis - Camionetas Diesel",
      "SOS Soluções - Software e Consultoria",
    ],
    img: imgFabio,
    url: "/FabioGhizoni",
    slug: "FabioGhizoni",
    phone: "+55 (43) 9 9828-0078",
    function: "Desenvolvedor Full-Stack",
    name: "Fábio Henrique Oderdenge Ghizoni",
    email: "fabiohenriqueghizoni10@gmail.com",
    education: [
      generateEducation(
        "Colégio Prof. Reni Correia Gamper",
        "– Ensino Médio ",
        2020,
        2022
      ),
      generateEducation(),
    ],
    face: "https://www.facebook.com/fabio.ghizoni.7",
    insta: "https://www.instagram.com/fabio.ghizoni_",
    about: `Olá! Sou Fábio Ghizoni, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas.`,
  },
  {
    softwares: [
      "Dart",
      "Canva",
      "React",
      "Python",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "React Native",
    ],
    url: "/MateusAugusto",
    slug: "MateusAugusto",
    img: imgMateusAugusto,
    education: ["", generateEducation()],
    phone: "+55 (43) 9 9643-0850",
    function: "Desenvolvedor Front-End",
    name: "Mateus Augusto Mendonça Lange",
    email: "mateusmendoncalange@gmail.com",
    insta: "https://www.instagram.com/m4teus.aug",
    face: "https://www.facebook.com/mateus.augusto.13662",
    about: `Olá! Sou Mateus Augusto, tenho 21 anos e sou estudante de Análise e Desenvolvimento de Sistemas.`,
  },
  {
    img: dartVader,
    softwares: [
      "Dart",
      "Canva",
      "React",
      "Python",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "React Native",
    ],
    education: ["", generateEducation()],
    url: "/RyanAlves",
    slug: "RyanAlves",
    phone: "+55 (43) 9 9621-9160",
    function: "Desenvolvedor Full-Stack",
    name: "Ryan Alves de Oliveira Lopes",
    email: "Ryanalvesdeoliveiralopes@gmail.com",
    insta: "https://www.instagram.com/ryan.alvslo",
    face: "https://www.facebook.com/ryan.alves.lopes.431734",
    about: `Olá! Sou Ryan Lopes, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas.`,
  },
  {
    img: mcLovin,
    softwares: [
      "Dart",
      "Canva",
      "React",
      "Python",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "React Native",
    ],
    email: "MateusCristiano@gmail.com",
    education: ["", generateEducation()],
    url: "/MateusCristiano",
    slug: "MateusCristiano",
    phone: "+55 (43) 9 9681-1520",
    function: "Desenvolvedor Full-Stack",
    name: "Mateus Cristiano",
    insta: "https://www.instagram.com/mateus_cris.tiano",
    face: "https://www.facebook.com/mateus.cristiano.9638",
    about: `Olá! Sou Mateus Cristiano, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas.`,
  },
];

export const glawck = creators[0];
export const fabio = creators[1];
export const mateusAugusto = creators[2];
export const ryan = creators[3];
export const mateusCristiano = creators[4];
