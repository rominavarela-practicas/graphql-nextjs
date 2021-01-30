const jwt = require('jsonwebtoken');
const JwtSecret = require('../config/JwtSecret');
const User = require('../models/User');

module.exports = {
  getUser: async (_, args, context) => {
    const { user } = context;
    return user;
  },
};
