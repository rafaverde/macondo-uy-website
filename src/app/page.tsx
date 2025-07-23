import { HeroSlider } from "@/components/HeroSlider";
import { GET_ALL_SLIDES } from "@/graphql/queries";
import { client } from "@/lib/apollo";

export interface SlideResponse {
  slidesFg: {
    caption: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
    active: boolean;
    order: number;
  };
}

export default async function Home() {
  const { data } = await client.query({
    query: GET_ALL_SLIDES,
  });

  const slides: SlideResponse[] = data.slides.nodes;

  return (
    <div className="bg-background">
      <HeroSlider slides={slides} />
    </div>
  );
}
