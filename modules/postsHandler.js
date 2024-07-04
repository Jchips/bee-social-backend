'use strict';
const Post = require('../models/post');

const postHandler = {};

postHandler.getPosts = async function (req, res, next) {
  try {
    let queryObj = {};

    // If uid was queried, then returns all the posts with that uid
    if (req.query.uid) {
      queryObj = { uid: req.query.uid }
    }

    let response = await Post.find(queryObj);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

// Currently being unused (switched to Firestore database)
postHandler.addPost = async function (req, res, next) {
  let newPost = req.body;
  try {
    let createdPost = await Post.create(newPost);
    res.status(201).send(createdPost);
  } catch (err) {
    next(err);
  }
}

postHandler.editPost = async function (req, res, next) {
  let { id } = req.params;
  let postToUpdate = req.body;

  try {
    let updatedPost = await Post.findByIdAndUpdate(id, postToUpdate, { new: true, overwrite: true }) // testing
    res.status(201).json(updatedPost);
  } catch (err) {
    next(err);
  }
}

postHandler.deletePost = async function (req, res, next) {
  let { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
}

postHandler.deleteMany = async function (req, res, next) {
  let { id } = req.params;
  try {
    await Post.deleteMany({ uid: id });
    res.status(200).json({ message: 'Posts deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = postHandler;