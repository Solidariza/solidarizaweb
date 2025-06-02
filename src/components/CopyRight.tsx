import { Logo, SocialIcons } from "@/ui";
import ButtonToTop from "@/ui/ButtonToTop";
import Image from "next/image";
import UnivaleLogo from "public/logounivale.svg";

export const CopyRight = () => {
  return (
    <section
      className="w-full mt-10 bg-gradient-to-r from-blue-primary via-blue-tertiary to-blue-quaternary text-white"
      style={{ clipPath: "ellipse(90% 100% at 50% 100%)" }}
    >
      <div className="relative flex flex-col items-center py-16 space-y-6">
        <SocialIcons />
        <div className="w-3/4 border-t border-white opacity-50" />

        <div className="flex items-center">
          <div className="flex flex-col text-xl cursor-pointer font-semibold items-center">
            <span className="pt-2 mx-1 inline-flex">
              <span className="mt-1 -mr-0.5">👴🏻</span>
              <Logo fontType="font-medium" />
              <span className="mt-1 -ml-0.5">👵🏻</span>
            </span>
            <div className="bg-white p-2 rounded-sm">
              <Image src={UnivaleLogo} alt="Logo Univale" />
            </div>
          </div>
          <div className="w-full border-t border-white opacity-50 rotate-90" />
          <div className="text-center space-y-2 text-nowrap">
            <p className="cursor-pointer hover:text-yellow-primary transition-all duration-500 ease-in-out">
              Home
            </p>
            <p className="cursor-pointer hover:text-yellow-primary transition-all duration-500 ease-in-out">
              Sobre nós
            </p>
            <p className="cursor-pointer hover:text-yellow-primary transition-all duration-500 ease-in-out">
              Parcerias
            </p>
          </div>
        </div>

        <ButtonToTop />
      </div>
    </section>
  );
};
