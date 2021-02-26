import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

// TODO: create a separate schema directory
const schema = gql`
  type Query {
    me: User
  }
 
  type User {
    username: String!
  }
`;

// TODO: create a resolvers directory
const resolvers = {
    Query: {
        me: () => {
            return {
                username: 'Skyler Sidner',
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});