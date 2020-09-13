const mongoose = require("mongoose");

const Post = mongoose.model("Post");

module.exports = {
  async getAll(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  },

  async getById(req, res) {
    const post = await Post.findById(req.params.id);

    return res.json(post);
  },

  async post(req, res) {
    const post = await Post.create(req.body);

    return res.json(post);
  },

  async update(req, res) {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(post);
  },

  async delete(req, res) {
    await Post.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
