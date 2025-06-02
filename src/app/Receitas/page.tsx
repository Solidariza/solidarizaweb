"use client";
import { clientContentful } from "@/lib";
import { ReceitaFields } from "@/types";
import { errorWithMessage } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PaginaReceitas() {
  const [busca, setBusca] = useState("");
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null);
  const [receitas, setReceitas] = useState<ReceitaFields[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await clientContentful.getEntries<ReceitaFields>({
          content_type: "receitas",
          include: 1,
        });

        if (response.items) {
          setReceitas(response.items as unknown as ReceitaFields[]);
        } else {
          setReceitas([]);
        }
      } catch (err: unknown) {
        let errorMessage = "Erro desconhecido ao buscar as receitas.";
        if (errorWithMessage(err)) {
          errorMessage = err.message;
        }
        console.error("Erro ao buscar receitas:", err);
        setError(errorMessage || "Erro ao buscar as receitas.");
        setReceitas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReceitas();
  }, []);

  const categoriasUnicas = [
    ...new Set(receitas.map((r) => r.fields.categoria || "Outros")),
  ];

  const receitasFiltradas = receitas.filter((receitaEntry) => {
    const receita = receitaEntry.fields;

    const correspondeBusca = (receita.titulo ?? "")
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeCategoria = categoriaSelecionada
      ? (receita.categoria ?? "") === categoriaSelecionada
      : true;
    return correspondeBusca && correspondeCategoria;
  });

  if (loading) {
    return <p className="text-center mt-10">Carregando receitas...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Erro: {error}</p>;
  }

  return (
    <main className="w-full min-h-screen px-6 py-10 mt-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#272343] mb-4 text-center font-prata">
        Receitas Deliciosas
      </h1>

      <div className="flex flex-col items-center w-full max-w-3xl mb-6">
        <input
          type="text"
          placeholder="Buscar receita..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full p-3 text-lg rounded-xl border border-[#272343] focus:outline-none focus:ring-2 focus:ring-[#272343]"
        />

        <button
          onClick={() => setMostrarFiltro(!mostrarFiltro)}
          className="mt-4 bg-[#272343] cursor-pointer hover:bg-[#ffd803] hover:text-[#272343] text-white font-semibold py-2 px-6 rounded-full"
        >
          {mostrarFiltro ? "Fechar filtro" : "Filtrar por categoria"}
        </button>

        {mostrarFiltro && (
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setCategoriaSelecionada(null)}
              className={`px-4 py-2 rounded-full border ${
                categoriaSelecionada === null
                  ? "bg-[#272343] text-white cursor-pointer"
                  : "bg-white text-[#272343] border-[#272343] cursor-pointer"
              }`}
            >
              Todas
            </button>
            {categoriasUnicas.map((categoria, i) => (
              <button
                key={i} // Using index as key is generally okay for static lists that don't change order or size
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-4 py-2 rounded-full border ${
                  categoriaSelecionada === categoria
                    ? "bg-[#272343] text-white cursor-pointer"
                    : "bg-white text-[#272343] border-[#272343] cursor-pointer"
                }`}
              >
                {/* Ensure 'categoria' is a string before calling charAt and slice */}
                {categoria
                  ? categoria.charAt(0).toUpperCase() + categoria.slice(1)
                  : ""}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {receitasFiltradas.map((receitaEntry) => {
          // Access fields and image URL from the receitaEntry object
          const receita = receitaEntry.fields;
          const imageUrl = receita.imagem?.fields?.file?.url;

          return (
            <div
              key={receitaEntry.sys.id} // Use sys.id for a stable key from Contentful
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
            >
              {imageUrl && (
                <div className="relative w-full h-40">
                  {" "}
                  {/* Image wrapper for 'fill' */}
                  <Image
                    src={`https:${imageUrl}`}
                    // Ensure 'alt' prop is a string, even if 'titulo' could be undefined
                    alt={receita.titulo ?? "Imagem da Receita"}
                    fill // Fills the parent div (w-full h-40)
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Optimizes image loading
                    className="object-cover rounded-t-xl" // Uses Tailwind for object-fit and top-rounding
                  />
                </div>
              )}
              <div className="p-4 flex-grow ">
                {/* Ensure 'titulo' is a string before rendering */}
                <h2 className="text-xl font-bold text-[#272343] font-prata mb-2">
                  {receita.titulo ?? ""}
                </h2>
                {/* Ensure 'descricao' is a string before using dangerouslySetInnerHTML */}
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: receita.descricao ?? "" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {receitasFiltradas.length === 0 && !loading && (
        <p className="text-gray-500 mt-10 text-lg">
          Nenhuma receita encontrada.
        </p>
      )}
    </main>
  );
}
