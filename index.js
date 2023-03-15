const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url, port }) => {
  console.log(`Your api is running at PORT: ${port}. - URL: ${url}`);
});
