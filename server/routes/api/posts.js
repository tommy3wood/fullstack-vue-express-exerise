const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET POSTS
router.get('/', (req, res) => {
  res.send('hello');
});

//ADD POSTS


//DELETE POSTS


module.exports = router;