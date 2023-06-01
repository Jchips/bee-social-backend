'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postHandler = require('./modules/postsHandler');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// MONGOOSE CONNECTION
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error)); // Handles errors after mongoose connection
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (req, res) => {
  res.status(200).send('Your default route is working');
});

// ROUTES
app.get('/posts', postHandler.getPosts);
app.post('/posts', postHandler.addPost);

// Catch all route
app.get('*', (req, res) => {
  res.status(400).send('Not found');
});

// Handles all server errors
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));