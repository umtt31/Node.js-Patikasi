const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clean-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', async (req, res) => {
  let posts = await Post.find({});
  res.render('index', { posts });
});

app.get('/post/:id', async (req, res) => {
  let post = await Post.findById(req.params.id);
  res.render('post', { post });
});

app.get('/addpost', (req, res) => {
  res.render('add_post');
});

app.post('/addpost', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3002;
app.listen(port, () => {
  console.log(`Sunucu calisiyor port: ${port}`);
});
