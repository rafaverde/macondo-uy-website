import { PortfolioGrid } from "@/components/PortfolioGrid";
import { GET_PAGINATED_PORTFOLIOS } from "@/graphql";
import { client } from "@/lib/apollo";
import { JOBS_PER_PAGE } from "@/lib/constants";
import {
  PageInfo,
  PaginatedPortfoliosResponse,
  PortfolioCase,
} from "@/lib/types";

export default async function PortfolioPage() {
  const { data } = await client.query<PaginatedPortfoliosResponse>({
    query: GET_PAGINATED_PORTFOLIOS,
    variables: {
      first: JOBS_PER_PAGE,
      after: null,
    },
  });

  const initialCases: PortfolioCase[] = data.portfolios.nodes;
  const pageInfo: PageInfo = data.portfolios.pageInfo;

  return (
    <section
      id="portfolio-grid"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-primary mx-auto text-center text-2xl font-bold md:max-w-1/2 md:text-4xl">
          Portfolio y cases
        </h2>

        <p className="text-foreground mx-auto mt-5 text-center md:max-w-2/3">
          Conocé algunos de los trabajos que desarrollamos para marcas reales
          con desafíos únicos. Desde estrategias digitales hasta identidades
          visuales completas: cada proyecto cuenta una historia, y en Macondo
          nos aseguramos de que sea inolvidable.
        </p>

        <PortfolioGrid initialCases={initialCases} pageInfo={pageInfo} />
      </div>
    </section>
  );
}
