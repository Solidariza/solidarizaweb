import { SectionMain, SectionRevenues } from "@/components";

export default function Home () {
  return (
    <main className="flex flex-col w-full h-auto mx-auto justify-center items-center">
      <SectionMain />
      <SectionRevenues />
    </main>
  );
};
