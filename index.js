const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//inicia app
const app = express();

//inicia o bd
mongoose.connect("mongodb://localhost:27017/mygamelist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

const Game = mongoose.model("Game");

//rota
app.get("/", (req, res) => {
  Game.create({
    title: "Little Nightmares",
    synopsis:
      "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears",
  });

  return res.send("Hello");
});

app.listen(3001);
