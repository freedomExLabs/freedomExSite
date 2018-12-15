const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  role: { type: String, default: 'user' }, // ['admin', 'user']
  points: Number,
  userAddress: String,
  userListingIds: Array,
  passHash: String,
});

module.exports = mongoose.model('user', userSchema);