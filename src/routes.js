const express = require("express");
const routes = express.Router();

const GameController = require("./controllers/GameController");
const UserController = require("./controllers/UserController");
const ReviewController = require("./controllers/ReviewController");
const NewsController = require("./controllers/NewsController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");

routes.get("/games", GameController.getAll);
routes.get("/games/:id", GameController.getById);
routes.post("/games", GameController.post);
routes.put("/games/:id", GameController.update);
routes.delete("/games/:id", GameController.delete);

//authentication
let isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  else
    return res.status(401).json({
      message: "Authentication necessary",
    });
};

routes.post("/login", (req, res, next) => {
  return new userController().login(req, res, next);
});

routes.get("/logout", isAuthenticated, (req, res) => {
  req.logout();
  req.session.destroy();

  return res.status(200).json({ message: "Logout realizado com sucesso" });
});

routes.get("/login/sucess", (req, res) => {
  return new userController().sucess(req, res);
});

routes.get("/login/failed", (req, res) => {
  return new userController().failed(req, res);
});

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

routes.get("/news", NewsController.getAll);
routes.get("/news/:id", NewsController.getById);
routes.post("/news", NewsController.post);
routes.put("/news/:id", NewsController.update);
routes.delete("/news/:id", NewsController.delete);

routes.get("/posts", PostController.getAll);
routes.get("/posts/:id", PostController.getById);
routes.post("/posts", PostController.post);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);

routes.get("/comments", CommentController.getAll);
routes.get("/comments/:id", CommentController.getById);
routes.post("/comments", CommentController.post);
routes.put("/comments/:id", CommentController.update);
routes.delete("/comments/:id", CommentController.delete);

module.exports = routes;
