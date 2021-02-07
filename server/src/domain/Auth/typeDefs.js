const models = `
  type AuthToken {
    token: String
  }

  input AuthInput {
    email: String!
    password: String!
  }
`;

const queries = `
`;

const mutations = `
  login(input: AuthInput): AuthToken
`;

module.exports = { models, queries, mutations };
