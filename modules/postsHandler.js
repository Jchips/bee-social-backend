'use strict';
const Post = require('../models/post');

const postHandler = {};

postHandler.getPosts = async function(req, res, next) {
  try {
    let response = await Post.find();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}

postHandler.addPost = async function(req, res, next) {
  let newPost = req.body;
  try {
    let createdPost = await Post.create(newPost);
    res.status(201).send(createdPost);
  } catch (err) {
    next(err);
  }
}

module.exports = postHandler;