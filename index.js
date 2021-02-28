const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config(); // allow visibility of environment variables


const schema = require('./schemas/index.js');
const resolvers = require('./resolvers/index.js');
const { dataSources } = require('./dataSources/index.js');


const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    dataSources,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server running on http://localhost:8000/graphql! 🚀');
});