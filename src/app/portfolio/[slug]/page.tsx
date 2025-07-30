import { GET_PAGINATED_PORTFOLIOS, GET_PORTFOLIO_BY_SLUG } from "@/graphql";
import { client } from "@/lib/apollo";
import { PortfolioCase } from "@/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_PAGINATED_PORTFOLIOS,
    variables: { first: 50 },
  });

  const cases: PortfolioCase[] = data.portfolios.nodes;

  return cases.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

export default async function PortfolioCasePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const { data } = await client.query({
    query: GET_PORTFOLIO_BY_SLUG,
    variables: { slug },
  });

  const portfolioCase: PortfolioCase = data.portfolio;

  if (!portfolioCase) {
    return notFound();
  }

  const category = portfolioCase.portfolioCategories?.nodes[0]?.name;
  const galleryImages = portfolioCase.portfolioFg.projectImages?.nodes;
  const videos = portfolioCase.portfolioFg.projectVideos?.nodes;
  const audios = portfolioCase.portfolioFg.projectAudios?.nodes;

  return (
    <section
      id="portfolio"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto grid grid-cols-1 p-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <span className="text-xs uppercase">Cliente//</span>
            <h2 className="text-primary text-3xl font-bold md:text-5xl">
              {portfolioCase.portfolioFg.clientName}
            </h2>
          </div>

          {category && (
            <div className="space-y-3">
              <span className="text-xs uppercase">Job//</span>
              <p className="text-2xl font-medium md:text-2xl">{category}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
