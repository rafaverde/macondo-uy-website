export interface PortfolioCase {
  id: string;
  title: string;
  slug: string;
  content?: string;
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
    clientName?: string;
    jobTitle?: string;
    relatedProduct?: {
      nodes: {
        id: string;
      }[];
    };
    projectImages?: {
      nodes: MediaItem[];
    };
    projectVideos?: {
      nodes: {
        videoEmbedFg: {
          videoEmbedUrl: string;
        };
      }[];
    };
    projectAudios?: {
      nodes: {
        audioEmbedFg: {
          audioEmbedUrl: string;
        };
      }[];
    };
  };
}

export interface MediaItem {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
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
