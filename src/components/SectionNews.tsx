import Image from "next/image";
import ImgSaude from "public/saude.png";

export const SectionNews = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center mt-20">
      <section className="flex flex-col my-2 w-full justify-center items-center px-4">
        <div className="flex flex-grow w-full justify-center items-center">
          <div className="w-full h-1 rounded-xs bg-blue-900 mr-4" />
          <h1 className="text-4xl font-bold text-nowrap">SAÚDE</h1>
          <div className="w-full h-1 rounded-xs bg-blue-900 ml-4" />
        </div>
        <Image src={ImgSaude} alt="Saúde" className="w-7/12" />
      </section>

      <section className="flex flex-col my-2 w-full justify-center items-center">
        <div className="flex flex-grow w-full justify-center items-center px-4">
          <div className="w-full h-1 rounded-xs bg-blue-900 mr-4" />
          <h1 className="text-4xl font-bold text-nowrap">ECONOMIA</h1>
          <div className="w-full h-1 rounded-xs bg-blue-900 ml-4" />
        </div>
        <Image src={ImgSaude} alt="Saúde" className="w-7/12" />
      </section>

      <section className="flex flex-col my-2 w-full justify-center items-center">
        <div className="flex flex-grow w-full justify-center items-center px-4">
          <div className="w-full h-1 rounded-xs bg-blue-900 mr-4" />
          <h1 className="text-4xl font-bold text-nowrap ">ARTE E CULTURA</h1>
          <div className="w-full h-1 rounded-xs bg-blue-900 ml-4" />
        </div>
        <Image src={ImgSaude} alt="Saúde" className="w-7/12" />
      </section>
    </main>
  );
};
