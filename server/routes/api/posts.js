const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET POSTS
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

//ADD POSTS

router.post('/', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

//DELETE POSTS
router.delete('/:id', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
});


async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://tome3wood:Forum1991!@cluster0-adnf5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  return client.db('Cluster0').collection('posts')
}

module.exports = router;