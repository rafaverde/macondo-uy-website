import { PortfolioGrid } from "@/components/PortfolioGrid";
import {
  GET_ALL_PORTFOLIO_CATEGORIES,
  GET_PAGINATED_PORTFOLIOS,
} from "@/graphql";
import { client } from "@/lib/apollo";
import {
  AllPortfolioCategoriesResponse,
  PaginatedPortfoliosResponse,
  PortfolioCase,
  PortfolioCategory,
} from "@/types";
import { CircleX } from "lucide-react";

export default async function PortfolioPage() {
  const [allCasesData, categoriesData] = await Promise.all([
    client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: {
        first: 100,
        after: null,
      },
    }),
    client.query<AllPortfolioCategoriesResponse>({
      query: GET_ALL_PORTFOLIO_CATEGORIES,
    }),
  ]);

  const allCases: PortfolioCase[] = allCasesData.data.portfolios.nodes;
  const categories: PortfolioCategory[] =
    categoriesData.data.portfolioCategories.nodes;

  return (
    <section
      id="portfolio-grid"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-primary mx-auto text-center text-2xl font-bold md:max-w-1/2 md:text-4xl">
          Nuestros trabajos
        </h2>
        {allCases.length > 0 ? (
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

        <PortfolioGrid allCases={allCases} categories={categories} />
      </div>
    </section>
  );
}
