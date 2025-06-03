"use client";
import { clientContentful } from "@/lib";
import { errorWithMessage } from "@/utils";
import { EntrySkeletonType } from "contentful";
import { SetStateAction, useEffect, useState } from "react";

const DicaCard = ({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <h3 className="text-xl font-semibold text-center text-gray-800">
        {titulo}
      </h3>
      <p className="text-gray-600 mt-4">{descricao}</p>
    </div>
  );
};

interface SaudeFields extends EntrySkeletonType {
  titulo: string;
  descricao: string;
}

interface DicaDeSaudeContent {
  titulo: string;
  descricao: string;
}

export default function Saude() {
  const [dicas, setDicas] = useState<DicaDeSaudeContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await clientContentful.getEntries<SaudeFields>({
          content_type: "saude",
        });

        if (response.items) {
          const dicasData = response.items.map((item) => ({
            titulo: item.fields.titulo,
            descricao: item.fields.descrio,
          }));
          setDicas(dicasData as SetStateAction<DicaDeSaudeContent[]>);
        } else {
          setDicas([]);
        }
      } catch (err: unknown) {
        let errorMessage = `Erro desconhecido ao buscar as receitas. ${err}`;
        if (errorWithMessage(err)) {
          errorMessage = err.message;
        }
        console.error("Erro ao buscar receitas:", errorMessage);
        setError(errorMessage);
        setDicas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-10 px-5 bg-gray-50 min-h-screen text-center">
        Carregando dicas de saúde...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 px-5 bg-gray-50 min-h-screen text-center text-red-500">
        Erro: {error}
      </div>
    );
  }

  return (
    <div className="py-10 px-5 min-h-screen mt-22">
      <h1 className="text-3xl font-bold text-center text-[#272343] mb-10 font-prata">
        Dicas de Saúde para Idosos
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {dicas.map((dica, index) => (
          <DicaCard
            key={index}
            titulo={dica.titulo}
            descricao={dica.descricao}
          />
        ))}
      </div>
    </div>
  );
}
