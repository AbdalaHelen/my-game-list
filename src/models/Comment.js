const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.mongo.ObjectId,
    ref: "PostSchema",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Comment", CommentSchema);
