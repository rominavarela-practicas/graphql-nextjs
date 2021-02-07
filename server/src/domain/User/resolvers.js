const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCryptSaltRounds = require('../../config/BCryptSaltRounds');
const JwtSecret = require('../../config/JwtSecret');
const User = require('../User/model');

// Queries
const queries = {};
queries.getUser = async (_, args, context) => {
  const { user } = context;
  return user;
};

// Mutations
const mutations = {};
mutations.createUser = async (_, args, context) => {
  const { name, email, password } = args.input;
  const userExists = await User.findOne({ email });
  if(userExists) {
    throw new Error('User exists');
  }
  args.input.password = await bcrypt.hash(args.input.password, BCryptSaltRounds);
  const user = new User(args.input);
  return await user.save();
};

module.exports = { queries, mutations };
