const { gql } = require('apollo-server');

const typeDefs = gql `
  scalar Timestamp

  type Query {
    getUsers:[User]
  }

  type Mutation {
    createUser(input: UserInput): User
    login(input: AuthInput): AuthToken
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

  input AuthInput {
    email: String!
    password: String!
  }

  type AuthToken {
    token: String
  }
`;

module.exports = typeDefs;
