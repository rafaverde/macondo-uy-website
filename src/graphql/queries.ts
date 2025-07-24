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
    products {
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
