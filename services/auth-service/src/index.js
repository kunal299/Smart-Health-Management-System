import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { typeDefs } from "./schema.js";
import { authResolver } from "./resolvers/authResolver.js";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  typeDefs,
  resolvers: authResolver,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Auth service running at ${url}`);
});

// const app = express();

// app.use(express.json());

// app.get("/health", (req, res) => {
//   res.send("Auth service is up");
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Running on port ${process.env.PORT || 3001}`);
// });
