"use client";
import { radioStations } from "@/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Radio() {
  const [currentStation, setCurrentStation] = useState<
    null | (typeof radioStations)[0]
  >(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (station: (typeof radioStations)[0]) => {
    const audio = document.getElementById("radio-audio") as HTMLAudioElement;
    if (audio) {
      if (currentStation?.name === station.name && isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        setCurrentStation(station);
        setIsPlaying(true);
      }
    }
  };
  useEffect(() => {
    const audio = document.getElementById("radio-audio") as HTMLAudioElement;
    if (audio && currentStation) {
      audio.src = currentStation.url;
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [currentStation, isPlaying]);
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-start min-h-screen bg-[#e3f6f5] text-[#1c1c1c] p-6 pt-28">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Melhores Rádios
        </h1>

        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4">
          {radioStations.map((station) => (
            <div
              key={station.name}
              className={`relative bg-[#fffffe] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl  flex flex-col justify-between`}
            >
              <Image alt={station.name} src={station.image} />
              <div className="p-4 text-center flex flex-col gap-2">
                <h2 className="text-lg font-bold text-[#272343]">
                  {station.name}
                </h2>

                <button
                  onClick={() => togglePlay(station)}
                  className="w-12 h-12 mx-auto flex items-center justify-center bg-[#ffd803] text-black rounded-full shadow hover:scale-110 transition-transform"
                >
                  {isPlaying && currentStation?.name === station.name ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zM10.5 3.5A.5.5 0 0 1 11 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.804 8.697L6.333 11.566A.5.5 0 0 1 5.5 11.134V4.866a.5.5 0 0 1 .833-.432l4.471 2.87a.5.5 0 0 1 0 .864z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <audio
          id="radio-audio"
          preload="none"
          onEnded={() => setIsPlaying(false)}
        />

        <p className="mt-6 text-xl text-center font-medium px-4">
          {currentStation ? <></> : "Selecione uma estação para ouvir"}
        </p>
      </div>
    </main>
  );
}
