import { AboutUs } from "@/components";
import { clientContentful } from "@/lib";
import { findCreatorByName, getSlugToName } from "@/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const creator = findCreatorByName(name);

  if (!creator) return { title: "Perfil não encontrado" };

  const formatName = getSlugToName(creator.slug);
  return {
    title: `Solidariza | ${formatName}`,
  };
}

export default async function PerfilPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const creator = findCreatorByName(name);
  if (!creator) notFound();

  const userInfos = (
    await clientContentful.getEntries({ content_type: "aboutMe" })
  ).items.find((item) => {
    return item.fields.nameUser === creator.name;
  });

  return <AboutUs creator={creator} userInfos={userInfos} />;
}
