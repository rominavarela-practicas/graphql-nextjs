const { gql } = require('apollo-server');

const typeDefs = gql `
  scalar Timestamp

  type Query {
    getUser: User
  }

  type Mutation {
    # User
    createUser(input: UserInput): User
    login(input: AuthInput): AuthToken

    # Product
    createProduct(input: ProductInput): Product

  }

  # User
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

  # Product
  type Product {
    _id: ID
    name: String
    count: Int
    price: Float
    createdAt: Timestamp
    updatedAt: Timestamp
  }

  input ProductInput {
    name: String!
    count: Int!
    price: Float!
  }
`;

module.exports = typeDefs;
