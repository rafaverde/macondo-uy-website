import { gql } from "@apollo/client";

export const GET_ALL_TESTIMONIALS = gql`
  query Testimonials {
    testimonios {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        testimoniosFg {
          author_role
          rating
          company
          companyLink
        }
      }
    }
  }
`;
