import { clientContentful } from "@/lib";
import { AssetFields, partnershipFields } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Parcerias() {
  const partnerships = await (
    await clientContentful.getEntries<partnershipFields>({
      content_type: "partnership",
    })
  ).items.map((item) => item);
  return (
    <main className="flex flex-col w-full h-screen mt-24 justify-start items-center">
      <h1 className="text-4xl text-center text-blue-primary font-lato font-black">
        Nossos Patrocinadores
      </h1>
      <h2 className="text-2xl text-center font-poppins font-semibold text-gray-dark mt-2 mb-4">
        Apoiadores que tornam nosso projeto possível
      </h2>
      <div
        className={`${
          partnerships.length < 6
            ? `flex flex-wrap justify-center gap-12`
            : `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12 place-items-center
      justify-center`
        }`}
      >
        {partnerships.map((partnership) => {
          const asset = partnership.fields.photoPartnership as AssetFields;
          const imgLogo = asset.fields.file.url;
          const description = asset.fields.description;
          const link = partnership.fields.linkPartnership;
          return (
            <div
              key={partnership.sys.id}
              className="w-50 h-50 p-4 bg-gradient-to-r from-blue-primary via-blue-secondary to-blue-quaternary 
              rounded-2xl shadow-md hover:shadow-2xl shadow-blue-primary/80 transition-all duration-300 ease-in-out"
            >
              {partnership && (
                <Link href={link}>
                  <div className="w-full h-full relative">
                    <Image
                      fill
                      alt={description}
                      className="rounded-xl"
                      src={`https:${imgLogo}`}
                    />
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
