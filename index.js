const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schemas/index.js');
const resolvers = require('./resolvers/index.js');



const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server running on http://localhost:8000/graphql! 🚀');
});