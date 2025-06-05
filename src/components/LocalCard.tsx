import LarJardim from "@/assets/lares/larjardim.jpg";
import { QrCode } from "@/ui";
import Image, { StaticImageData } from "next/image";

interface LocalCardProps {
  title?: string;
  qrUrl?: string;
  imgUrl?: string;
  description?: string;
  src?: StaticImageData;
}

export const LocalCard = ({
  src = LarJardim,
  imgUrl = "/larjardim.jpg",
  title = "Lar dos Idosos de Jardim Alegre",
  qrUrl = "https://www.facebook.com/lardosidosossaojose/?locale=pt_BR",
  description = `É um lar que valoriza a experiência e a história de vida de cada residente. Proporcionamos um ambiente 
    seguro e acolhedor, com serviços de cuidados de saúde, alimentação balanceada e atividades sociais e culturais 
    diversificadas. Nossa equipe é treinada para oferecer um atendimento humanizado e respeitoso, promovendo a 
    dignidade e a autonomia dos idosos. Buscamos criar um espaço onde a sabedoria da idade seja celebrada e 
    compartilhada em um ambiente de carinho e respeito mútuo.`,
}: LocalCardProps) => {
  return (
    <div
      className="flex flex-col w-full h-full gap-2 p-4 bg-white rounded-xs justify-between items-center
      shadow-md hover:shadow-2xl"
    >
      <div className="min-w-60 min-h-60 relative">
        <Image fill src={src} alt={title} />
      </div>
      <h3 className="font-poppins font-semibold text-xl text-center text-blue-primary">
        {title}
      </h3>
      <h4 className="mx-6 h-auto text-xl text-justify font-lato">
        {description}
      </h4>
      <h5 className="text-gray-dark/90 text-center font-poppins font-medium">
        Doe com QR Code:
      </h5>
      <QrCode qrUrl={qrUrl} title={title} imgUrl={imgUrl} />
    </div>
  );
};
