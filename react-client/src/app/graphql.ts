import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri:
    (`/graphql` as any) || (`${process.env.REACT_APP_API_URL}/graphql` as any),
  cache: new InMemoryCache(),
});
