export interface PortfolioCase {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  portfolioCategories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  portfolioFg: {
    relatedProduct: {
      nodes: {
        id: string;
      }[];
    };
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface PaginatedPortfoliosResponse {
  portfolios: {
    nodes: PortfolioCase[];
    pageInfo: PageInfo;
  };
}
