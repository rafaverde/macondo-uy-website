import { PortfolioGrid } from "@/components/PortfolioGrid";
import { getAllPortfolios } from "@/lib/data/portfolios";
import { CircleX } from "lucide-react";

export default async function PortfolioPage() {
  const { initialCases, pageInfo } = await getAllPortfolios();

  return (
    <section
      id="portfolio-grid"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-primary mx-auto text-center text-2xl font-bold md:max-w-1/2 md:text-4xl">
          Nuestros trabajos
        </h2>
        {initialCases.length > 0 ? (
          <p className="text-foreground mx-auto mt-5 text-center md:max-w-2/3">
            Conocé algunos de los trabajos que desarrollamos para
            emprendimientos reales con desafíos únicos. Desde estrategias
            digitales hasta identidades visuales completas. Cada proyecto cuenta
            una historia y en Macondo nos aseguramos de que sea inolvidable.
          </p>
        ) : (
          <div className="mx-auto mt-5 flex items-center justify-center gap-2 contain-content">
            <CircleX className="text-primary" />
            <p className="text-foreground text-center md:max-w-2/3">
              Error de carga de datos, intente nuevamente más tarde.
            </p>
          </div>
        )}

        <PortfolioGrid initialCases={initialCases} pageInfo={pageInfo} />
      </div>
    </section>
  );
}
