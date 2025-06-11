export const handleClickChange = (
  length: number,
  visibleCards: number,
  direction: "next" | "prev",
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  setActiveIndex((currentIndex) => {
    if (direction === "next") {
      // Se chegou ao final, volta para o início
      if (currentIndex + visibleCards >= length) {
        return 0;
      }
      // Senão, avança um card
      return currentIndex + 1;
    } else {
      // Se está no início, vai para o final
      if (currentIndex <= 0) {
        return Math.max(0, length - visibleCards);
      }
      // Senão, volta um card
      return currentIndex - 1;
    }
  });
};
