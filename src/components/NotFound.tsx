import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="border-4 border-gray-500 border-dashed rounded-lg p-0.5">
      <div
        className="bg-gradient-to-r from-blue-primary via-blue-tertiary to-blue-quaternary p-10 rounded-lg 
        shadow-2xl text-center"
      >
        <h1 className="text-6xl text-white font-prata font-bold mb-6">
          404 - Página não encontrada
        </h1>
        <div
          className="flex flex-col sm:flex-row sm:space-x-2 items-center justify-center text-2xl
          font-lato"
        >
          <h2 className="text-white font-medium mb-2 sm:mb-0">
            Volte para página inicial
          </h2>
          <Link
            href="/"
            className="bg-white text-blue-primary px-4 py-2 rounded border border-gray-500 shadow-sm font-bold 
            hover:bg-yellow-primary transition-all duration-300 ease-in-out "
          >
            AQUI
          </Link>
        </div>
      </div>
    </div>
  );
};
