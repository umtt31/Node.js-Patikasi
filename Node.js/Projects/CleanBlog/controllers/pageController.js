const Post = require('../models/Post');

exports.addPostPage = (req, res) => {
  res.render('add_post');
};

exports.editPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit_post', { post });
};
