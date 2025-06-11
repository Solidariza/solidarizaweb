"use client";
import { glawck, pageLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  customStyle?: boolean;
  closeMenu?: () => void;
}

const List = ({ className, closeMenu, customStyle, ...props }: ListProps) => {
  const pathname = usePathname();
  return (
    <div
      {...props}
      className={`${
        customStyle ? `flex flex-col gap-3` : `gap-5`
      } md:flex font-prata font-bold tracking-wider mt-1 ${className}`}
    >
      {pageLinks.map(({ href, label }) => {
        const sobreNos = "/SobreNos";
        const isSobreNos = href === sobreNos;
        const isActive = isSobreNos
          ? pathname.startsWith(sobreNos)
          : pathname === href;
        const finalHref = isSobreNos ? `${href}${glawck.url}` : href;
        return (
          <Link
            key={finalHref}
            href={finalHref}
            onClick={closeMenu}
            title={`Ir para ${label}`}
            aria-label={`Ir para ${label}`}
            className={`w-full h-full px-2 py-1 transition-all duration-300 ease-in-out ${
              customStyle
                ? `rounded-md ${
                    isActive
                      ? `bg-blue-quaternary text-white`
                      : `hover:bg-black/20 text-white`
                  }`
                : `rounded-full ${
                    isActive
                      ? `bg-yellow-primary text-blue-quaternary`
                      : `text-white hover:text-yellow-primary`
                  }`
            }`}
          >
            <p className={`mt-1 text-nowrap ${customStyle && `ml-4 text-lg`}`}>
              {label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
