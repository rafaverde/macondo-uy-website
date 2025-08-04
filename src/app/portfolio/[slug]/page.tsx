import { PortfolioGallery } from "@/components/PortfolioGallery";
import { PortfolioMedias } from "@/components/PortfolioMedias";
import { GET_PAGINATED_PORTFOLIOS, GET_PORTFOLIO_BY_SLUG } from "@/graphql";
import { client } from "@/lib/apollo";
import { PortfolioCase } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const { data } = await client.query({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: { first: 100 },
    });

    const cases: PortfolioCase[] = data?.portfolios?.nodes || [];

    if (!cases || cases.length === 0) {
      console.log(
        "Nenhum portfolio case encontrado para gerar páginas estáticas.",
      );
      return [];
    }

    const validSlugs = cases
      .filter(
        (caseItem) =>
          caseItem &&
          typeof caseItem.slug === "string" &&
          caseItem.slug.length > 0,
      )
      .map((caseItem) => ({
        slug: caseItem.slug,
      }));

    return validSlugs;
  } catch (error) {
    console.error(
      "Erro ao buscar slugs para generateStaticParams (Portfolio):",
      error,
    );
    return [];
  }
}

export default async function PortfolioCasePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  let portfolioCase: PortfolioCase | null = null;

  try {
    const { data } = await client.query({
      query: GET_PORTFOLIO_BY_SLUG,
      variables: { slug },
    });

    portfolioCase = data.portfolio;
  } catch (error) {
    console.log("Erro ao carregar portfolio", error);
    notFound();
  }

  if (!portfolioCase) {
    return notFound();
  }

  const category = portfolioCase.portfolioCategories?.nodes[0]?.name;
  const imagesGallery = portfolioCase.portfolioFg.projectImages?.nodes;
  const videos = portfolioCase.portfolioFg.projectVideos?.nodes;
  const audios = portfolioCase.portfolioFg.projectAudios?.nodes;

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
