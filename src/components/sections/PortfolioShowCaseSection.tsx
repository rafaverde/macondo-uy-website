import {
  GET_LATEST_PORTFOLIO_CASES,
  GET_PORTFOLIO_CASES_BY_CATEGORY,
} from "@/graphql/queries";
import { client } from "@/lib/apollo";
import { PortifolioCase } from "@/lib/types";
import { PortfolioSlider } from "../PortfolioSlider";

export async function PortfolioShowCaseSection({
  categoryName,
}: {
  categoryName?: string;
}) {
  let portfolioCases: PortifolioCase[] = [];
  let displayCategoryName = "";

  if (categoryName) {
    const { data } = await client.query({
      query: GET_PORTFOLIO_CASES_BY_CATEGORY,
      variables: { categoryName },
    });

    const categoryData = data.portfolioCategories?.nodes[0];

    portfolioCases = categoryData.portfolios?.nodes || [];
    displayCategoryName = categoryData?.name || categoryName;
  } else {
    const { data } = await client.query({
      query: GET_LATEST_PORTFOLIO_CASES,
    });

    portfolioCases = data.portfolios?.nodes || [];
  }

  if (!portfolioCases || portfolioCases.length === 0) {
    return null;
  }

  console.log(portfolioCases);

  return (
    <section className="bg-background w-full scroll-mt-[50px] pt-10 pb-4">
      <div className="container mx-auto p-4">
        <h2 className="text-primary text-center text-2xl font-bold md:text-4xl">
          {categoryName
            ? `Conozca nuestro trabajo de ${displayCategoryName}`
            : "Portfolio y cases"}
        </h2>
        {!categoryName && (
          <p className="text-foreground mt-5 text-center">
            Conocé algunos de los trabajos que desarrollamos para marcas reales
            con desafíos únicos. Desde estrategias digitales hasta identidades
            visuales completas: cada proyecto cuenta una historia, y en Macondo
            nos aseguramos de que sea inolvidable.
          </p>
        )}

        <PortfolioSlider portfolioCases={portfolioCases} />
      </div>
    </section>
  );
}
