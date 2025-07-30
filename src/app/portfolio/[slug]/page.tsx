import { PortfolioGallery } from "@/components/PortfolioGallery";
import { PortfolioMedias } from "@/components/PortfolioMedias";
import { GET_PAGINATED_PORTFOLIOS, GET_PORTFOLIO_BY_SLUG } from "@/graphql";
import { client } from "@/lib/apollo";
import { PortfolioCase } from "@/types";
import Image from "next/image";
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
  const imagesGallery = portfolioCase.portfolioFg.projectImages?.nodes;
  const videos = portfolioCase.portfolioFg.projectVideos?.nodes;
  const audios = portfolioCase.portfolioFg.projectAudios?.nodes;

  console.log(portfolioCase);

  return (
    <section
      id="portfolio"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
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

          {portfolioCase.content && (
            <div className="space-y-3">
              <span className="text-xs uppercase">Descripción//</span>
              <div
                className="cms-content"
                dangerouslySetInnerHTML={{ __html: portfolioCase.content }}
              ></div>
            </div>
          )}
        </div>

        <div>
          <Image
            src={portfolioCase.featuredImage.node.sourceUrl}
            alt={portfolioCase.featuredImage.node.altText}
            width={700}
            height={700}
            className="border-border rounded-2xl border"
          />
        </div>
      </div>

      {imagesGallery && <PortfolioGallery images={imagesGallery} />}

      {videos && audios && <PortfolioMedias videos={videos} audios={audios} />}
    </section>
  );
}
