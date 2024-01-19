require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");

const MONGODB = process.env.MONGODB_URL;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb");
    return server.listen({ port: process.env.PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
