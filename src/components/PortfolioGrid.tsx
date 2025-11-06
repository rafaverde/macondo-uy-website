"use client";

import { GET_PAGINATED_PORTFOLIOS } from "@/graphql";
import { client } from "@/lib/apollo";
import {
  PageInfo,
  PaginatedPortfoliosResponse,
  PortfolioCase,
  PortfolioCategory,
} from "@/types";
import { useMemo, useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { Button } from "./ui/button";
import { JOBS_PER_PAGE } from "@/lib/constants";

interface PortfolioGridProps {
  allCases: PortfolioCase[];
  categories: PortfolioCategory[];
}

export function PortfolioGrid({ allCases, categories }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(JOBS_PER_PAGE);

  const filteredCases = useMemo(() => {
    if (!activeCategory) {
      return allCases;
    }
    return allCases.filter((caseItem) =>
      caseItem.portfolioCategories?.nodes.some(
        (category) => category.slug === activeCategory,
      ),
    );
  }, [allCases, activeCategory]);

  const displayedCases = filteredCases.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCases.length;

  const handleFilterClick = (categorySlug: string | null) => {
    setActiveCategory(categorySlug);
    setVisibleCount(JOBS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + JOBS_PER_PAGE);
  };

  return (
    <>
      <div className="my-12 flex flex-wrap justify-center gap-3">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => handleFilterClick(null)}
          className="cursor-pointer hover:text-white"
        >
          Todos
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.slug ? "default" : "outline"}
            onClick={() => handleFilterClick(cat.slug)}
            className="cursor-pointer hover:text-white"
          >
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayedCases.map((caseItem) => (
          <PortfolioCard key={caseItem.id} portfolioCase={caseItem} isGrid />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <Button size="xl" onClick={handleLoadMore}>
            Más trabajos
          </Button>
        </div>
      )}
    </>
  );
}
