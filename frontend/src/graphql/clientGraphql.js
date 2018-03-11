import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';




const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:9080/graphql'}),
    cache: new InMemoryCache()
});


export default client;
