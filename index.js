import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schemas/index.js';
import resolvers from './resolvers/index.js';

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});