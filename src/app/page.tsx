import { HeroSlider } from "@/components/HeroSlider";
import { EquipoSection } from "@/components/sections/EquipoSection";
import { ParaQuienSection } from "@/components/sections/ParaQuienSection";
import { PortfolioShowCaseSection } from "@/components/sections/PortfolioShowCaseSection";
import { ProductosSection } from "@/components/sections/ProductosSection";
import { getAllProducts, getAllSlides } from "@/lib/data";

export default async function Home() {
  const [slidesData, productsData] = await Promise.all([
    getAllSlides(),
    getAllProducts(),
  ]);

  return (
    <div className="bg-background">
      <HeroSlider slides={slidesData} />

      <ParaQuienSection />
      <ProductosSection products={productsData} />
      <PortfolioShowCaseSection />
      <EquipoSection />
    </div>
  );
}
