import { HeroSlider } from "@/components/HeroSlider";
import { EquipoSection } from "@/components/sections/EquipoSection";
import { ParaQuienSection } from "@/components/sections/ParaQuienSection";
import { PortfolioShowCaseSection } from "@/components/sections/PortfolioShowCaseSection";
import { ProductosSection } from "@/components/sections/ProductosSection";
import { GET_ALL_PRODUCTS, GET_ALL_SLIDES } from "@/graphql";
import { client } from "@/lib/apollo";
import { Product, ProductsResponse, Slide, SlidesResponse } from "@/types";

export default async function Home() {
  let slides: Slide[] = [];
  let products: Product[] = [];

  try {
    const [slidesData, productsData] = await Promise.all([
      client.query<SlidesResponse>({ query: GET_ALL_SLIDES }),
      client.query<ProductsResponse>({ query: GET_ALL_PRODUCTS }),
    ]);

    slides = slidesData.data.slides.nodes;
    products = productsData.data.products.nodes;
  } catch (error) {
    console.log("Erro ao buscar dados para a Home Page", error);
  }

  return (
    <div className="bg-background">
      <HeroSlider slides={slides} />

      <ParaQuienSection />
      <ProductosSection products={products} />
      <PortfolioShowCaseSection />
      <EquipoSection />
    </div>
  );
}
