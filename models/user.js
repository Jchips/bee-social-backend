'use strict';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    require: true
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', userSchema);