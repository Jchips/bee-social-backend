# Bee Social Backend

**Author**: Jelani R.
**Version**: 1.2.0

## Overview

Backend for Bee Social project. It gathers the posts from the database and displays them for the users.

## Architecture

Uses Mongoose/MongoDB, Express, Dotenv, Cors and built in Node.js.

## Change Log

- 07-04-2024 2:54am - (1.2.0) Added ability to delete users and delete many posts at once.
- 05-10-2024 10:03pm - (1.1.1) Edited user handler to find user by uid.
- 06-01-2023 11:13pm - (1.1.0) Added users Handler and uid query parameter for users' posts.
- 06-01-2023 3:12pm - (1.0.0) Application has a fully-functional express server. RESTful API with CRUD operations.

## Getting Started

To start server, run ```npm start``` or ```nodemon``` if you have nodemon installed.
Needs a MongoDB connection URL. Check the .env.sample for .env requirements.
