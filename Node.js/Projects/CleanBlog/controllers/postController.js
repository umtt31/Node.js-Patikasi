const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  let posts = await Post.find({});
  res.render('index', { posts });
};

exports.getPost = async (req, res) => {
  let post = await Post.findById(req.params.id);
  res.render('post', { post });
};

exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, { ...req.body });
  res.redirect(`/post/${req.params.id}`);
};
