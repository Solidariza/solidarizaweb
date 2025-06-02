import LarSanto from "@/assets/lares/larsanto.svg";
import { LocalCard } from "@/components";

export default function QueroAjudar() {
  return (
    <main className="flex flex-col mt-24 items-center min-h-screen px-10">
      <h1 className="text-center tracking-wide font-prata text-4xl text-gray-dark font-black">
        Faça sua parte
      </h1>

      <div className="rounded-md bg-white p-4 my-4 shadow-md hover:shadow-2xl">
        <h2 className="text-xl text-gray-dark font-poppins text-justify">
          Nesta página, você encontra informações sobre três lares que fazem a
          diferença na vida de muitos idosos: o Lar de Manoel Ribas, o Lar de
          Ivaiporã e o Lar de Jardim Alegre. Eles oferecem cuidado, conforto e
          carinho, mas precisam da sua ajuda para continuar essa bela jornada.
          Sua doação contribui para o bem-estar, a alegria e a dignidade desses
          idosos, proporcionando desde cuidados de saúde até momentos de lazer e
          interação.
        </h2>
        <h2
          className="text-blue-primary text-lg font-semibold mt-4 font-poppins text-center bg-yellow-primary
          rounded-md px-4 py-1"
        >
          Seja um agente de transformação! Seu gesto de solidariedade leva
          esperança e sorrisos a quem tanto merece. Doe hoje e faça a diferença!
        </h2>
      </div>

      <div className="flex gap-2">
        <LocalCard
          src={LarSanto}
          imgUrl="/laridosos.svg"
          title="Lar dos Idosos de Manoel Ribas"
          qrUrl="https://www.facebook.com/lardosidosossaojose/?locale=pt_BR"
          description="Oferece um ambiente acolhedor e familiar, onde o bem-estar e a felicidade dos residentes são 
            prioridade. Nossa equipe dedicada proporciona cuidados personalizados, incluindo assistência médica,
            atividades recreativas e refeições nutritivas preparadas com carinho. Promovemos a interação social 
            e a manutenção da autonomia, incentivando a participação em oficinas, passeios e momentos de
            convívio. Nosso objetivo é criar um lar onde cada idoso se sinta valorizado, seguro e feliz, 
            desfrutando de uma rotina tranquila e estimulante."
        />
        <LocalCard
          src={LarSanto}
          imgUrl="/laridosos.svg"
          title="Lar dos Idosos de Ivaiporã"
          qrUrl="https://www.facebook.com/lardosidosossaojose/?locale=pt_BR"
          description="A qualidade de vida na terceira idade é o nosso foco principal. Oferecemos instalações confortáveis 
            e seguras, com quartos individuais e espaços de convivência agradáveis. Nossa equipe multidisciplinar está 
            sempre atenta às necessidades de cada residente, proporcionando cuidados de saúde, apoio emocional e 
            atividades que estimulam o corpo e a mente. Acreditamos em um envelhecimento ativo e participativo, 
            promovendo a independência e o bem-estar integral de todos."
        />
        <LocalCard />
      </div>
    </main>
  );
}
