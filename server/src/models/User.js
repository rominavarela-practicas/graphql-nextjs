const mongoose = require('mongoose');

const opts = {
  // timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties
  // make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
};

const UserSchema = mongoose.Schema({
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
}, opts);

module.exports = mongoose.model('User', UserSchema);
