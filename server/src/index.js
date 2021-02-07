require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const MongoUri = require('./config/MongoUri');
const { typeDefs, resolvers } = require('./domain');
const context = require('./context');

const server = new ApolloServer({ typeDefs, resolvers, context });

mongoose.connect(MongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(_ => {
  server.listen().then(({ url }) => {
    console.log(`Server listening at ${url}`);
  });
});
