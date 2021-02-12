const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');
const { ApolloServer } = require('apollo-server-express');
const { Auth } = require('./src/routes');

dotenv.config();
const app = express();
app.use('/rest', Auth);

const server = new ApolloServer({ typeDefs, resolvers, playground: true });
server.applyMiddleware({ app });

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('Database connected')
);

app.listen({ port: process.env.PORT }, () =>
  console.log(
    `Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
