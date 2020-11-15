const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.mongo.ObjectId,
    ref: "UserSchema",
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("News", NewsSchema);
