const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

require("./src/config/auth")(passport);

//inicia app
const app = express();
app.use(express.json());

//session
app.use(
  session({
    secret: "gamelist",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session);

app.use(flash());

//middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("sucess_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

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
