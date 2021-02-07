const models = `
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

const queries = `
  getProducts:[Product]
  getProduct(id:ID!): Product
`;

const mutations = `
  createProduct(input: ProductInput): Product
  updateProduct(id: ID!, input: ProductInput): Product
  deleteProduct(id: ID!): ID
`;

module.exports = { models, queries, mutations };
