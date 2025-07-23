import { gql } from "@apollo/client";

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
