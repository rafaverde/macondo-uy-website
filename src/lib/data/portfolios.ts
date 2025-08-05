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
import { notFound } from "next/navigation";

export const getAllPortfolios = cache(async () => {
  try {
    const { data } = await client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: {
        first: JOBS_PER_PAGE,
        after: null,
      },
    });

    const initialCases: PortfolioCase[] = data.portfolios.nodes;
    const pageInfo: PageInfo = data.portfolios.pageInfo;

    return { initialCases, pageInfo };
  } catch (error) {
    console.log("Erro ao buscar dados do Portfolio", error);
    const initialCases: PortfolioCase[] = [];
    const pageInfo: PageInfo = { hasNextPage: false, endCursor: "" };

    return { initialCases, pageInfo };
  }
});

export const getPortfolioBySlug = cache(async (slug: string) => {
  try {
    const { data } = await client.query<SinglePortfolioResponse>({
      query: GET_PORTFOLIO_BY_SLUG,
      variables: { slug },
    });

    return data.portfolio;
  } catch (error) {
    console.log("Erro ao carregar portfolio por slug:", error);
    return notFound();
  }
});

export async function getAllPortfolioSlugs() {
  try {
    const { data } = await client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: { first: 100 },
    });

    return data?.portfolios?.nodes || [];
  } catch (error) {
    console.error(
      "Erro ao buscar slugs para generateStaticParams (Portfolio):",
      error,
    );
    return [];
  }
}
