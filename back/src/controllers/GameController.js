const mongoose = require("mongoose");

const Game = mongoose.model("Game");

module.exports = {
  async getAll(req, res) {
    const games = await Game.find();

    return res.json(games);
  },

  async getById(req, res) {
    const game = await Game.findById(req.params.id);

    return res.json(game);
  },

  async post(req, res) {
    const game = await Game.create(req.body);

    return res.json(game);
  },

  async update(req, res) {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(game);
  },

  async delete(req, res) {
    await Game.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
