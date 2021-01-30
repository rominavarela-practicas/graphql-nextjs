const { gql } = require('apollo-server');

const typeDefs = gql `
  scalar Timestamp

  type Query {
    getUsers:[User]
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type User {
    id: ID
    name: String
    email: String
    createdAt: Timestamp
    updatedAt: Timestamp
  }
`;

module.exports = typeDefs;
