import { HeroSlider } from "@/components/HeroSlider";
import { EquipoSection } from "@/components/sections/EquipoSection";
import { ParaQuienSection } from "@/components/sections/ParaQuienSection";
import { GET_ALL_SLIDES } from "@/graphql/queries";
import { client } from "@/lib/apollo";
import { SlideResponse } from "@/lib/types";

export default async function Home() {
  const { data } = await client.query({
    query: GET_ALL_SLIDES,
  });

  const slides: SlideResponse[] = data.slides.nodes;

  return (
    <div className="bg-background">
      <HeroSlider slides={slides} />
      <ParaQuienSection />

      <EquipoSection />
    </div>
  );
}
