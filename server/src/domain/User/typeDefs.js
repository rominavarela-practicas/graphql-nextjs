const models = `
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
`;

const queries = `
  getUser: User
`;

const mutations = `
  createUser(input: UserInput): User
`;

module.exports = { models, queries, mutations };
