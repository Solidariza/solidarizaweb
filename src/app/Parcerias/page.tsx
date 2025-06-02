import { sponsors } from "@/data";
import Image from "next/image";

export default function Parcerias() {
  return (
    <main className="flex flex-col w-full h-screen mt-24 justify-start items-center">
      <h1 className="text-4xl text-blue-primary font-lato font-black">
        Nossos Patrocinadores
      </h1>
      <h2 className="text-2xl font-poppins font-semibold text-gray-dark mt-2 mb-4">
        Apoiadores que tornam nosso projeto possível
      </h2>
      <div className="flex gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="w-50 h-50 p-4 bg-gradient-to-r from-blue-primary via-blue-secondary to-blue-quaternary 
              rounded-2xl shadow-md hover:shadow-2xl shadow-blue-primary/80 transition-all duration-300 ease-in-out"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
