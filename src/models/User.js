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
});

mongoose.model("User", UserSchema);
