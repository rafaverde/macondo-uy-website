import { gql } from "@apollo/client";

// Slides
export const GET_ALL_SLIDES = gql`
  query GetAllSlides {
    slides {
      nodes {
        slidesFg {
          caption
          title
          description
          buttonText
          buttonLink
          image {
            node {
              altText
              sourceUrl
            }
          }
          order
          active
        }
      }
    }
  }
`;

// Products
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        id
        title
        slug
        content
        productsFg {
          buttonText
          neededDescription
          price
          subtitle
          frontIcon {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      productsFg {
        subtitle
        price
        buttonText
      }
    }
  }
`;

// Portfolio
export const GET_PORTFOLIO_CASES_BY_CATEGORY = gql`
  query getPortfolioCasesByCategory($categoryName: [String]) {
    portfolioCategories(where: { slug: $categoryName }) {
      nodes {
        portfolios(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
        name
      }
    }
  }
`;

export const GET_PORTFOLIO_CASES_BY_PRODUCT_ID = gql`
  query GetPortfolioCasesByProductId($productId: ID!) {
    portfolios(
      first: 6
      where: {
        relatedProductId: $productId
        orderby: { field: DATE, order: DESC }
      }
    ) {
      nodes {
        id
        title
        slug
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
      }
    }
  }
`;

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
