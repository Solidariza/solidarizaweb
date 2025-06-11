"use client";
import { creators } from "@/data";
import { getName, getTwoNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ButtonsAboutUs = () => {
  const pathname = usePathname();
  return (
    <div
      className="flex w-full justify-center items-center gap-2 font-lato font-medium tracking-tighter text-xl mt-22 
      text-blue-quaternary"
    >
      {creators.map((creator) => {
        const href = `/SobreNos/${creator.slug}`;
        const isActive = pathname.includes(href);
        return (
          <Link
            href={href}
            key={creator.url}
            title={`Ir para página de ${getTwoNames(creator.name)}`}
            className={`relative cursor-pointer rounded-md p-1 px-2 text-center transition-all duration-300 ease-in-out
               ${
                 isActive
                   ? `bg-clip-text text-transparent bg-gradient-to-r from-blue-primary via-yellow-primary 
                  to-blue-quaternary before:bg-white before:absolute before:inset-0 before:-z-10 before:rounded-md`
                   : `bg-white`
               }`}
          >
            <span className="inline sm:hidden">{getName(creator.name)}</span>
            <span className="hidden sm:inline text-nowrap">
              {getTwoNames(creator.name)}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonsAboutUs;
