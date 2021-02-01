const mongoose = require('mongoose');

const opts = {
  // timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties
  // make Mongoose use Unix time (ms since Jan 1, 1970)
  timestamps: { currentTime: () => Date.now() }
};

const ProductSchema = mongoose.Schema({
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
}, opts);

module.exports = mongoose.model('Product', ProductSchema);
