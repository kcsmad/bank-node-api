import * as dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server";
import { context } from "./context";

dotenv.config();

const PORT = process.env.PORT || 8888

const typeDefs = gql``;

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers, context: context });

server.listen().then(({ port: PORT }) => {
    console.log(`GraphQL server running at ${PORT}`)
})
