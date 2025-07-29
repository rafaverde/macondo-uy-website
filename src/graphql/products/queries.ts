import { gql } from "@apollo/client";

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
        neededDescription
      }
    }
  }
`;
