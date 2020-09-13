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
});

mongoose.model("Review", ReviewSchema);
