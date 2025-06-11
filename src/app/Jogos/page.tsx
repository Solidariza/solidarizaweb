"use client";
import { clientContentful } from "@/lib";
import { Entry, EntrySkeletonType } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface JogoFields extends EntrySkeletonType {
  nome: string;
  link: string;
  imagem: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export default function Jogos() {
  const [jogos, setJogos] = useState<Entry<JogoFields>[]>([]);

  useEffect(() => {
    async function fetchJogos() {
      try {
        const entries = await clientContentful.getEntries<JogoFields>({
          content_type: "jogo",
        });
        setJogos(entries.items);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    }
    fetchJogos();
  }, []);
  return (
    <main className="flex flex-col w-full h-auto min-h-screen justify-center items-center px-8">
      <h1 className="mt-24 text-4xl text-blue-primary text-center font-black font-prata">
        Jogos para diversão e exercitação da mente.
      </h1>
      <h2 className="text-center text-xl font-semibold font-poppins text-gray-dark my-6">
        Seja bem-vindo(a) ao espaço de jogos do Solidariza dedicado ao seu lazer
        e bem-estar! <br />
        CLIQUE nas imagens para iniciar os jogos!
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {jogos.map((jogo) => {
          const nome = jogo.fields.nome as string;
          const link = jogo.fields.link as string;

          const imagem = jogo.fields.imagem as
            | { fields: { file: { url: string } } }
            | undefined;

          const imageUrl = imagem && `https:${imagem.fields.file.url}`;

          return (
            <div
              key={jogo.sys.id}
              title={`Ir para o jogo de ${nome}`}
              className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md 
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              >
                {imageUrl && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      fill
                      alt={nome}
                      src={imageUrl}
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold text-blue-primary">
                    {nome}
                  </h2>
                  <p className="mt-2 text-lg text-blue-primary">
                    Clique para jogar
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
