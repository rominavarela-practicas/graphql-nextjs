const bcrypt = require('bcrypt');
const BCryptSaltRounds = require('../config/BCryptSaltRounds');
const User = require('../models/User');

module.exports = {
  createUser: async (_, args, context) => {
    const { name, email, password } = args.input;
    const userExists = await User.findOne({ email });
    if(userExists) {
      throw new Error('User exists');
    }
    args.input.password = await bcrypt.hash(args.input.password, BCryptSaltRounds);
    const user = new User(args.input);
    return await user.save();
  },
};
