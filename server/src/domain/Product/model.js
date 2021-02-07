const mongoose = require('mongoose');

const collectionName = 'Products';

const schema = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  count: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
};

const opts = {
  // timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties
  // make Mongoose use Unix time (ms since Jan 1, 1970)
  timestamps: { currentTime: () => Date.now() }
};

module.exports = mongoose.model(collectionName, mongoose.Schema(schema, opts));
