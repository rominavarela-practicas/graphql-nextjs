const { gql } = require('apollo-server');
const { loadDir, joinObjects } = require('../utils');

const typeDefs = loadDir('domain').requireAll('typeDefs');
const resolvers = loadDir('domain').requireAll('resolvers');

module.exports.typeDefs = gql `
  scalar Timestamp

  type Query {
    ${ typeDefs.map(_ => _.queries || '').join('') }
  }

  type Mutation {
    ${ typeDefs.map(_ => _.mutations || '').join('') }
  }

  ${typeDefs.map(_ => _.models || '').join('')}
`;

module.exports.resolvers = {
  Query: joinObjects(resolvers.map(_ => _.queries)),
  Mutation: joinObjects(resolvers.map(_ => _.mutations)),
};
