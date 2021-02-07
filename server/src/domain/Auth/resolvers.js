const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BCryptSaltRounds = require('../../config/BCryptSaltRounds');
const JwtSecret = require('../../config/JwtSecret');
const JwtTtl = require('../../config/JwtTtl');
const User = require('../User/model');

// Queries
const queries = {};

// Mutations
const mutations = {};
mutations.login = async (_, args, context) => {
  const { email, password } = args.input;
  const userExists = await User.findOne({ email });
  if(!userExists) {
    throw new Error('User does not exist');
  }

  const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
  if(!isPasswordCorrect) {
    throw new Error('Incorrect password');
  }

  const userPayload = Object.assign({}, userExists._doc);
  delete userPayload.password;
  const token = await jwt.sign(userPayload, JwtSecret, { expiresIn: JwtTtl });
  return { token };
};

module.exports = { queries, mutations };
