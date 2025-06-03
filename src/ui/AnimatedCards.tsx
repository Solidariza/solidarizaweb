"use client";
import { cardsData, cardsLength } from "@/data";
import { NavigationButton } from "@/ui";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AnimatedCards = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  const startIndex = activeIndex;
  const visibleCards = isMobile ? 3 : 5;
  const endIndex = startIndex + visibleCards;
  const visibleCardsArray = cardsData.slice(startIndex, endIndex);
  return (
    <div className="flex w-full h-auto relative -mt-27 justify-between items-center px-10 gap-4">
      <NavigationButton
        direction="prev"
        length={cardsLength}
        visibleCards={visibleCards}
        setActiveIndex={setActiveIndex}
      />
      {visibleCardsArray.map((card, index) => {
        return (
          <div
            key={startIndex + index}
            onClick={() => router.push(card.href)}
            title={`Ir para seção de ${card.title}`}
            aria-label={`Ir para seção de ${card.title}`}
            className="w-50 h-50 min-w-50 min-h-50 bg-blue-quaternary hover:bg-yellow-primary hover:scale-110 
              transition-all ease-in-out duration-300 rounded-xl cursor-pointer relative group"
          >
            <div
              className="flex flex-col w-full h-full p-9 text-white group-hover:text-blue-quaternary justify-between 
                items-center transition-all ease-in-out duration-300"
            >
              {card.icon}
              <h1
                aria-label={card.title}
                className="text-2xl font-lato font-black text-nowrap"
              >
                {card.title}
              </h1>
            </div>
          </div>
        );
      })}
      <NavigationButton
        direction="next"
        length={cardsLength}
        visibleCards={visibleCards}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default AnimatedCards;
