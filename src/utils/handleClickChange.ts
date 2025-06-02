export const handleClickChange = (
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  direction: "next" | "prev",
  length: number,
) => {
  setActiveIndex((prevIndex) => {
    if (direction === "next") {
      return (prevIndex + 1) % length;
    } else {
      return (prevIndex - 1 + length) % length;
    }
  });
};
