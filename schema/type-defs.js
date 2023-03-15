const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    year: Int!
    inTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(title: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input UpdateInput {
    id: ID!
    username: String!
  }

  type Mutation {
    createUser(userInput: CreateUserInput!): User!
    updateUsername(updateInput: UpdateInput!): User
    deleteUser(id: ID!): Boolean!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
