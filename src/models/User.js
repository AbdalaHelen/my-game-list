const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  playing: {
    type: mongoose.mongo.ObjectId,
    ref: "GameSchema",
  },
  completed: {
    type: mongoose.mongo.ObjectId,
    ref: "GameSchema",
  },
  dropped: {
    type: mongoose.mongo.ObjectId,
    ref: "GameSchema",
  },
  plantoplay: {
    type: mongoose.mongo.ObjectId,
    ref: "GameSchema",
  },
});

mongoose.model("User", UserSchema);
