const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.mongo.ObjectId,
    ref: "UserSchema",
  },
  content: {
    type: String,
    require: true,
  },
  replies: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Post", PostSchema);
