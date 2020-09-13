const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");

module.exports = {
  async getAll(req, res) {
    const comments = await Comment.find();

    return res.json(comments);
  },

  async getById(req, res) {
    const comment = await Comment.findById(req.params.id);

    return res.json(comment);
  },

  async post(req, res) {
    const comment = await Comment.create(req.body);

    return res.json(comment);
  },

  async update(req, res) {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(comment);
  },

  async delete(req, res) {
    await Comment.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
