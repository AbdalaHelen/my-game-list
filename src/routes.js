const express = require("express");
const routes = express.Router();

const GameController = require("./controllers/GameController");
const UserController = require("./controllers/UserController");
const ReviewController = require("./controllers/ReviewController");

routes.get("/games", GameController.getAll);
routes.get("/games/:id", GameController.getById);
routes.post("/games", GameController.post);
routes.put("/games/:id", GameController.update);
routes.delete("/games/:id", GameController.delete);

routes.get("/users", UserController.getAll);
routes.get("/users/:id", UserController.getById);
routes.post("/users", UserController.post);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get("/reviews", ReviewController.getAll);
routes.get("/reviews/:id", ReviewController.getById);
routes.post("/reviews", ReviewController.post);
routes.put("/reviews/:id", ReviewController.update);
routes.delete("/reviews/:id", ReviewController.delete);

module.exports = routes;
