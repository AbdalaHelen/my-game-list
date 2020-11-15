const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.mongo.ObjectId,
    ref: "UserSchema",
  },
  game: {
    type: mongoose.mongo.ObjectId,
    ref: "GameSchema",
  },
});

mongoose.model("Review", ReviewSchema);
