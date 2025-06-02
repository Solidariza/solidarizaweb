import { ButtonsAboutUs } from "@/ui";

export default function SobreNos({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center">
      <ButtonsAboutUs />
      {children}
    </main>
  );
}
