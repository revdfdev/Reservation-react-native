import * as React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NavigationWrap from '../NavigationWrap'
import Config from 'react-native-config';

const client = new ApolloClient({
  uri: Config.BASE_URL,
  onError: (networkError) => {
    if (networkError) console.log(networkError)
  }
})


const ApolloApp = () => (
  <ApolloProvider client={client}>
    <NavigationWrap />
  </ApolloProvider>
);

export default ApolloApp;