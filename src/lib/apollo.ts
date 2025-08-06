import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      ProductsFg: {
        keyFields: false,
      },
      PortfolioFg: {
        keyFields: false,
      },
      SlidesFg: {
        keyFields: false,
      },
      VideoEmbedFg: {
        keyFields: false,
      },
      AudioEmbedFg: {
        keyFields: false,
      },
    },
  }),
});
