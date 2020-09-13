const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//inicia app
const app = express();
app.use(express.json());

//inicia o bd
mongoose.connect("mongodb://localhost:27017/mygamelist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

const Game = mongoose.model("Game");
const User = mongoose.model("User");
const Review = mongoose.model("Review");
const News = mongoose.model("News");
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");

//route
app.use("/api", require("./src/routes"));

app.listen(3001);
