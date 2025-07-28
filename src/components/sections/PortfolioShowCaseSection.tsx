import { GET_LATEST_PORTFOLIO_CASES } from "@/graphql/queries";
import { client } from "@/lib/apollo";
import { PortifolioCase } from "@/lib/types";
import { PortfolioSlider } from "../PortfolioSlider";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function PortfolioShowCaseSection({
  productId,
}: {
  productId?: string;
}) {
  const { data } = await client.query({
    query: GET_LATEST_PORTFOLIO_CASES,
  });

  const allPortfolioCases: PortifolioCase[] = data.portfolios?.nodes || [];
  let finalPortfolioCases: PortifolioCase[] = [];

  if (productId) {
    finalPortfolioCases = allPortfolioCases.filter(
      (portfolio) =>
        portfolio.portfolioFg.relatedProduct.nodes[0].id === productId,
    );
  } else {
    finalPortfolioCases = allPortfolioCases.slice(0, 6);
  }

  const categoryTitle =
    finalPortfolioCases[0]?.portfolioCategories?.nodes[0].name;

  return (
    <section
      id="trabajos"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        {!finalPortfolioCases || finalPortfolioCases.length === 0 ? (
          <h2 className="text-primary mx-auto text-center text-2xl font-light md:max-w-1/2">
            Aún no hay casos registrados para esta categoría.
          </h2>
        ) : (
          <>
            <h2 className="text-primary mx-auto text-center text-2xl font-bold md:max-w-1/2 md:text-4xl">
              {categoryTitle
                ? `Conozca nuestro trabajo de ${categoryTitle}`
                : "Portfolio y cases"}
            </h2>

            <p className="text-foreground mx-auto mt-5 text-center md:max-w-2/3">
              {!categoryTitle
                ? "Conocé algunos de los trabajos que desarrollamos para marcas reales con desafíos únicos. Desde estrategias digitales hasta identidades visuales completas: cada proyecto cuenta una historia, y en Macondo nos aseguramos de que sea inolvidable."
                : ""}
            </p>
            <PortfolioSlider portfolioCases={finalPortfolioCases} />
          </>
        )}

        <div className="mt-8 w-full text-center">
          <Button asChild size="xl">
            <Link href="/portfolio">
              Hay más ejemplos <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
