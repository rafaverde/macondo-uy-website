import "server-only";
import {
  PageInfo,
  PaginatedPortfoliosResponse,
  PortfolioCase,
  SinglePortfolioResponse,
} from "@/types";
import { cache } from "react";
import { client } from "../apollo";
import { GET_PAGINATED_PORTFOLIOS, GET_PORTFOLIO_BY_SLUG } from "@/graphql";
import { JOBS_PER_PAGE } from "../constants";

export const getAllPortfolios = cache(async () => {
  try {
    const { data } = await client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: {
        first: JOBS_PER_PAGE,
        after: null,
      },
      context: {
        fetchOptions: {
          next: { tags: ["portfolio"] },
        },
      },
    });

    const initialCases: PortfolioCase[] = data.portfolios.nodes;
    const pageInfo: PageInfo = data.portfolios.pageInfo;

    return { initialCases, pageInfo };
  } catch (error) {
    console.error("Erro ao buscar dados do Portfolio", error);
    throw new Error("Não foi possível carregar os dados do portfólio.");
  }
});

export const getPortfolioBySlug = cache(async (slug: string) => {
  try {
    const { data } = await client.query<SinglePortfolioResponse>({
      query: GET_PORTFOLIO_BY_SLUG,
      variables: { slug },
      context: {
        fetchOptions: {
          next: { tags: ["portfolio"] },
        },
      },
    });

    return data.portfolio;
  } catch (error) {
    console.error("Erro ao carregar portfolio por slug:", error);
    throw new Error("Não foi possível carregar dados deste case.");
  }
});

export async function getAllPortfolioSlugs() {
  try {
    const { data } = await client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: { first: 100 },
      context: {
        fetchOptions: {
          next: { tags: ["portfolio"] },
        },
      },
    });

    return data?.portfolios?.nodes || [];
  } catch (error) {
    console.error(
      "Erro ao buscar slugs para generateStaticParams (Portfolio):",
      error,
    );
    throw new Error(
      "Não foi possível buscar os slugs do portfolio para o build.",
    );
  }
}
