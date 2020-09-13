const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    require: true,
  },
  developer: {
    type: String,
    require: true,
  },
  genres: {
    type: String,
    require: true,
  },
  platforms: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

mongoose.model("Game", GameSchema);
