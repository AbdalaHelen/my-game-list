const mongoose = require("mongoose");

const Review = mongoose.model("Review");

module.exports = {
  async getAll(req, res) {
    const reviews = await Review.find();

    return res.json(reviews);
  },

  async getById(req, res) {
    const review = await Review.findById(req.params.id);

    return res.json(review);
  },

  async post(req, res) {
    const review = await Review.create(req.body);

    return res.json(review);
  },

  async update(req, res) {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(review);
  },

  async delete(req, res) {
    await Review.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
