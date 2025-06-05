import { CopyRight, NavBar } from "@/components";
import { fabio, glawck, mateusAugusto, mateusCristiano, ryan } from "@/data";
import { clientContentful } from "@/lib";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lato, Poppins, Prata } from "next/font/google";
import "./globals.css";

const FontPrata = Prata({
  weight: "400",
  style: "normal",
  variable: "--prata",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "vietnamese"],
});

const FontLato = Lato({
  variable: "--lato",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

const FontPoppins = Poppins({
  variable: "--poppins",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "600", "900"],
});

const siteName = "Solidariza";

const team = `${siteName} Team`;

const title = `${siteName} | Website`;

const description = `Site para entreterimento e informações básicas sobre diversos assuntos da região do Vale do Ivaí,
  com foco e assesibilidade para pessoas mais velhas. Venha conhecer nosso site, não custa nada e são apenas alguns
    minutinhos!!!`;

export const generateMetadata = async (): Promise<Metadata> => {
  const response = await clientContentful.getEntries({
    content_type: "sobreNs",
  });
  const emails = response.items.map((item) => item.fields.emailUser);
  const phones = response.items.map((item) => item.fields.phoneUser);
  const getInstaByName = (name: string) => {
    const item = response.items.find((item) => item.fields.nameUser === name);
    return item?.fields.instaUser;
  };
  return {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    appleWebApp: {
      title: title,
      capable: true,
      startupImage: "./favicon.ico",
      statusBarStyle: "black-translucent",
    },
    twitter: {
      title: title,
      creator: team,
      images: "./favicon.ico",
      description: description,
      card: "summary_large_image",
    },
    openGraph: {
      title: title,
      type: "website",
      locale: "pt-BR",
      siteName: siteName,
      determiner: "auto",
      countryName: "Brasil",
      images: "./favicon.ico",
      description: description,
      phoneNumbers: phones as string[] | "+55 (43) 9 9828-0078",
      emails: emails as string[] | "solidarizaenterprise@gmail.com",
    },
    keywords: [
      "HTML",
      "React",
      "NextJS",
      "Prisma",
      "Modern",
      "Idosos",
      "WebSite",
      "Pessoas",
      "Peoples",
      "Elderly",
      "Playground",
      "TypeScript",
      "ContentFul",
      "JavaScript",
      "Technology",
      "Tecnologia",
      "TailwindCSS",
      "React Icons",
      "Fábio Ghizoni",
      "QRCodeStyling",
      "All Brownsers",
      "Glack Henrique",
      "Pessoas idosas",
      "Modern WebSite",
      "Mateus Augusto",
      "Vercel Analytics",
      "Mateus Cristiano",
      "Vercel Speed Insights",
    ],
    authors: [
      { name: siteName, url: "https://www.instagram.com/solidariza_hub" },
      {
        name: mateusAugusto.name,
        url: getInstaByName(mateusAugusto.name) as
          | string
          | "https://www.instagram.com/solidariza_hub",
      },
      {
        name: mateusCristiano.name,
        url: getInstaByName(mateusCristiano.name) as
          | string
          | "https://www.instagram.com/solidariza_hub",
      },
      {
        name: ryan.name,
        url: getInstaByName(ryan.name) as
          | string
          | "https://www.instagram.com/solidariza_hub",
      },
      {
        name: fabio.name,
        url: getInstaByName(fabio.name) as
          | string
          | "https://www.instagram.com/solidariza_hub",
      },
      {
        name: glawck.name,
        url: getInstaByName(glawck.name) as
          | string
          | "https://www.instagram.com/solidariza_hub",
      },
    ],
    title: title,
    creator: team,
    publisher: team,
    category: "website",
    generator: "Next.JS",
    description: description,
    classification: "website",
    applicationName: "Solidariza",
    referrer: "origin-when-cross-origin",
    metadataBase: new URL("https://solidarizaweb-cyan.vercel.app"),
    abstract: `Site desenvolvido com propósito a auxiliar idosos e quaisquer tipo de pessoas a se entreterem e ir em busca 
    de conhecimento e informação.`,
  };
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body
        className={`${FontPrata.variable} ${FontLato.variable} ${FontPoppins.variable} flex flex-col min-w-full min-h-screen
        justify-between justify-items-center items-center bg-indigo-100`}
      >
        <NavBar />
        {children}
        <CopyRight />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
