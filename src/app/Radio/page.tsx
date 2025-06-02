import { radioStations } from "@/data";
import { TextMain } from "@/ui";

export default function Radio() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TextMain className="font-lato mt-22 font-extrabold">
        As melhores rádios para você
      </TextMain>
      {radioStations.map((radio) => (
        <div key={radio.name}>{radio.name}</div>
      ))}
    </main>
  );
}
