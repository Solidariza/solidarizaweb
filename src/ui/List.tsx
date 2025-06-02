"use client";
import { glawck, pageLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const List = () => {
  const pathname = usePathname();
  return (
    <div className="space-x-5 hidden md:flex font-prata font-bold tracking-wider mt-1">
      {pageLinks.map(({ href, label }) => {
        const sobreNos = "/SobreNos";
        const isSobreNos = href === sobreNos;
        const isActive = isSobreNos
          ? pathname.startsWith(sobreNos)
          : pathname === href;
        const finalHref = isSobreNos ? `${href}/${glawck.url}` : href;
        return (
          <Link
            key={finalHref}
            href={finalHref}
            title={`Ir para ${label}`}
            className={`px-2 py-1 rounded-full transition-all duration-300 ease-in-out ${
              isActive
                ? `bg-yellow-primary text-blue-quaternary`
                : `text-white hover:text-yellow-primary`
            }`}
          >
            <p className="mt-1 text-nowrap">{label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
