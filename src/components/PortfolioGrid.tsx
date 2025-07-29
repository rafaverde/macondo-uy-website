"use client";

import { GET_PAGINATED_PORTFOLIOS } from "@/graphql";
import { client } from "@/lib/apollo";
import { PageInfo, PaginatedPortfoliosResponse, PortfolioCase } from "@/types";
import { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { Button } from "./ui/button";
import { JOBS_PER_PAGE } from "@/lib/constants";

interface PortfolioGridProps {
  initialCases: PortfolioCase[];
  pageInfo: PageInfo;
}

export function PortfolioGrid({ initialCases, pageInfo }: PortfolioGridProps) {
  const [cases, setCases] = useState<PortfolioCase[]>(initialCases);
  const [currentPageInfo, setCurrentPageInfo] = useState(pageInfo);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLoadMore() {
    setIsLoading(true);

    const { data } = await client.query<PaginatedPortfoliosResponse>({
      query: GET_PAGINATED_PORTFOLIOS,
      variables: {
        first: JOBS_PER_PAGE,
        after: currentPageInfo.endCursor,
      },
    });

    setCases([...cases, ...data.portfolios.nodes]);
    setCurrentPageInfo(data.portfolios.pageInfo);

    setIsLoading(false);
  }

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <PortfolioCard key={caseItem.id} portfolioCase={caseItem} />
        ))}
      </div>

      {currentPageInfo.hasNextPage && (
        <div className="mt-12 text-center">
          <Button size="xl" disabled={isLoading} onClick={handleLoadMore}>
            {isLoading ? "Cargando..." : "Cargar más trabajos"}
          </Button>
        </div>
      )}
    </>
  );
}
