import { gql } from "@apollo/client";

export const GET_LATEST_PORTFOLIO_CASES = gql`
  query GetLatestPortfolioCases {
    portfolios(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioCategories(first: 1) {
          nodes {
            name
          }
        }
        portfolioFg {
          relatedProduct {
            nodes {
              ... on Product {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGINATED_PORTFOLIOS = gql`
  query GetPaginatedPortfolios($first: Int, $after: String) {
    portfolios(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        portfolioCategories(first: 1) {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_PORTFOLIO_BY_SLUG = gql`
  query GetPortfolioBySlug($slug: ID!) {
    portfolio(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      portfolioCategories {
        nodes {
          name
          slug
        }
      }
      portfolioFg {
        clientName
        jobTitle
        projectImages {
          nodes {
            ... on MediaItem {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
        projectVideos {
          nodes {
            ... on VideoEmbed {
              videoEmbedFg {
                videoEmbedUrl
              }
            }
          }
        }
        projectAudios {
          nodes {
            ... on AudioEmbed {
              audioEmbedFg {
                audioEmbedUrl
              }
            }
          }
        }
      }
    }
  }
`;
