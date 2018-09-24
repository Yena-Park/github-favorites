import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./components/App";
import { API_TOKEN, API_BASE_URL } from "./config/constants";

const httpLink = new HttpLink({
  uri: API_BASE_URL,
  headers: {
    authorization: `Bearer ${API_TOKEN}`
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
