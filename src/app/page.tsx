import HeroAndResources from "@/components/HeroAndResources";
import LatestNews from "@/components/LatestNews";
import { fetchHeroConfig } from "@/lib/noticias";

export const revalidate = 3600; // ISR: regenerar cada 1 hora

export default async function HomePage() {
  const heroConfig = await fetchHeroConfig();

  return (
    <>
      <HeroAndResources heroConfig={heroConfig} />
      <LatestNews />
    </>
  );
}
