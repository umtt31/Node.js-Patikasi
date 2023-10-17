const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

mongoose.connect('mongodb://localhost:27017/clean-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.post('/addpost', postController.addPost);
app.delete('/post/:id', postController.deletePost);
app.put('/post/edit/:id', postController.updatePost);

app.get('/addpost', pageController.addPostPage);
app.get('/post/edit/:id', pageController.editPostPage);

const port = 3002;
app.listen(port, () => {
  console.log(`Sunucu calisiyor port: ${port}`);
});
