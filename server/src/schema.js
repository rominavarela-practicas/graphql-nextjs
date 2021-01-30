const { gql } = require('apollo-server');

const typeDefs = gql `
  scalar Timestamp

  type Query {
    getUser: User
  }

  type Mutation {
    createUser(input: UserInput): User
    login(input: AuthInput): AuthToken
  }

  type User {
    _id: ID
    name: String
    email: String
    createdAt: Timestamp
    updatedAt: Timestamp
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type AuthToken {
    token: String
  }

  input AuthInput {
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
