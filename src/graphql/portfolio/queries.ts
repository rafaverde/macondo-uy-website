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
