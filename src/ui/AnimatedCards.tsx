"use client";
import { cards, cardsLength } from "@/data";
import { NavigationButton } from "@/ui";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AnimatedCards = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width <= 768) setVisibleCards(3);
      else if (width < 1024) setVisibleCards(4);
      else setVisibleCards(5);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);
  const startIndex = activeIndex;
  const cardsData = visibleCards === 3 ? cards(65) : cards();
  const endIndex = startIndex + visibleCards;
  const visibleCardsArray = cardsData.slice(startIndex, endIndex);
  return (
    <div
      className={`flex w-full h-auto relative justify-between items-center ${
        visibleCards === 3
          ? `-space-x-30 px-5 -mt-20`
          : `px-10 -mt-23 xl:-mt-25 gap-2 xl:gap-4`
      }`}
    >
      <NavigationButton
        direction="prev"
        length={cardsLength}
        visibleCards={visibleCards}
        isMobile={visibleCards === 3}
        setActiveIndex={setActiveIndex}
      />
      {visibleCardsArray.map((card, index) => {
        const isLeft = visibleCards === 3 && index === 0;
        const isRight = visibleCards === 3 && index === 2;
        const isCenter = visibleCards === 3 && index === 1;
        return (
          <div
            key={startIndex + index}
            onClick={() => router.push(card.href)}
            title={`Ir para seção de ${card.title}`}
            aria-label={`Ir para seção de ${card.title}`}
            className={`transition-all ease-in-out duration-300 rounded-xl cursor-pointer relative group ${
              visibleCards === 3
                ? `${
                    isLeft
                      ? `z-20 translate-x-10 bg-blue-quaternary/75 hover:bg-yellow-primary`
                      : ``
                  } ${
                    isCenter
                      ? `z-30 scale-125 bg-yellow-primary hover:bg-blue-quaternary`
                      : ``
                  } ${
                    isRight
                      ? `z-20 -translate-x-10 bg-blue-quaternary/75 hover:bg-yellow-primary `
                      : ``
                  } min-w-40 min-h-40 w-40 h-40`
                : `min-w-45 min-h-45 w-45 h-45 xl:min-w-50 xl:min-h-50 xl:w-50 xl:h-50 bg-blue-quaternary 
                  hover:bg-yellow-primary hover:scale-110`
            }
              `}
          >
            <div
              className={`flex flex-col w-full h-full justify-center items-center transition-all 
                ease-in-out duration-300 ${
                  visibleCards === 3
                    ? `${
                        isLeft
                          ? `text-white group-hover:text-blue-quaternary`
                          : ``
                      } ${
                        isCenter
                          ? `text-blue-quaternary group-hover:text-white`
                          : ``
                      } ${
                        isRight
                          ? `text-white group-hover:text-blue-quaternary`
                          : ``
                      }`
                    : `text-white group-hover:text-blue-quaternary`
                }`}
            >
              {card.icon}
              <h1
                aria-label={card.title}
                className={`mt-2 font-lato font-black text-nowrap ${
                  visibleCards === 3 ? `text-xl` : ` text-2xl`
                } `}
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
        isMobile={visibleCards === 3}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default AnimatedCards;
