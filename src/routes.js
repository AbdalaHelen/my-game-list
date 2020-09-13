const express = require("express");
const routes = express.Router();

const GameController = require("./controllers/GameController");

routes.get("/games", GameController.getAll);
routes.get("/games/:id", GameController.getById);
routes.post("/games", GameController.post);
routes.put("/games/:id", GameController.update);
routes.delete("/games/:id", GameController.delete);

module.exports = routes;
