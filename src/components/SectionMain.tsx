import { AnimatedCards } from "@/ui";

export const SectionMain = () => {
  return (
    <section className="flex flex-col w-full h-auto">
      <div className="w-full contrast-125 brightness-75 h-75 mt-18 bg-fundo bg-end bg-cover" />
      <AnimatedCards />
    </section>
  );
};
