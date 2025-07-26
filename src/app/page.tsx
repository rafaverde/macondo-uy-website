import { HeroSlider } from "@/components/HeroSlider";
import { EquipoSection } from "@/components/sections/EquipoSection";
import { ParaQuienSection } from "@/components/sections/ParaQuienSection";
import { ProductosSection } from "@/components/sections/ProductosSection";
import { GET_ALL_PRODUCTS, GET_ALL_SLIDES } from "@/graphql/queries";
import { client } from "@/lib/apollo";
import { Product, ProductsResponse, SlideResponse } from "@/lib/types";

export default async function Home() {
  const [slidesData, productsData] = await Promise.all([
    client.query({ query: GET_ALL_SLIDES }),
    client.query({ query: GET_ALL_PRODUCTS }),
  ]);

  const slides: SlideResponse[] = slidesData.data.slides.nodes;
  const products: Product[] = productsData.data.products.nodes;

  return (
    <div className="bg-background">
      <HeroSlider slides={slides} />

      <ParaQuienSection />
      <ProductosSection products={products} />
      <EquipoSection />
    </div>
  );
}
