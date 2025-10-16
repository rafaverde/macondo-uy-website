import { gql } from "@apollo/client";

export const GET_ALL_TEAM_MEMBERS = gql`
  query teamMembers {
    teamMembers(first: 20) {
      nodes {
        title
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        teamMemberFg {
          position
        }
      }
    }
  }
`;
