const mongoose = require("mongoose");

const News = mongoose.model("News");

module.exports = {
  async getAll(req, res) {
    const news = await News.find();

    return res.json(news);
  },

  async getById(req, res) {
    const news = await News.findById(req.params.id);

    return res.json(news);
  },

  async post(req, res) {
    const news = await News.create(req.body);

    return res.json(news);
  },

  async update(req, res) {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(news);
  },

  async delete(req, res) {
    await News.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
