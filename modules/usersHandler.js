'use strict';

const User = require('../models/user');

const userHandler = {};

userHandler.getUsers = async function (req, res, next) {
  try {
    let allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
}

userHandler.getOneUser = async function (req, res, next) {
  const { id } = req.params;
  try {
    let user = await User.find({ uid: id }).exec();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

userHandler.addUser = async function (req, res, next) {
  try {
    let newUser = req.body;
    let addedUser = await User.create(newUser);
    res.status(201).json(addedUser);
  } catch (err) {
    next(err);
  }
}

// if user changed their displayName, then store the new displayName. Otherwise, keep the old.
// Same for their photoURL
userHandler.updateUser = async function (req, res, next) {
  try {
    let { id } = req.params;
    let updatedUser = await User.findById(id);

    if (!updatedUser) {
      res.status(404).send('User not found');
    } else {
      updatedUser.displayName = req.body.displayName || updatedUser.displayName;
      updatedUser.photoURL = req.body.photoURL || updatedUser.photoURL;
      updatedUser.save();
      res.status(200).send(updatedUser);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = userHandler;