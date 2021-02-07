const mongoose = require('mongoose');

const collectionName = 'Users';

const schema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
};

const opts = {
  // timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties
  // make Mongoose use Unix time (ms since Jan 1, 1970)
  timestamps: { currentTime: () => Date.now() }
};

module.exports = mongoose.model(collectionName, mongoose.Schema(schema, opts));
