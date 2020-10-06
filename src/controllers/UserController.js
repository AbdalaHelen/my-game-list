const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = mongoose.model("User");

module.exports = {
  async getAll(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async getById(req, res) {
    const user = await User.findById(req.params.id);

    return res.json(user);
  },

  async post(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(user);
  },

  async delete(req, res) {
    await User.findByIdAndRemove(req.params.id);

    return res.send();
  },

  login(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/api/users/login/sucess",
      failureRedirect: "/api/users/login/failed",
      failureFlash: true,
    })(req, res, next);
  },

  sucess(req, res) {
    return res.status(200).json({ message: "Login successful!" });
  },

  failed(req, res) {
    return res.status(500).json({ message: "Incorrect password" });
  },

  async post(req, res) {
    let u = {
      ...req.body,
    };

    if (!!u.password) u.password = bcrypt.hashSync(u.password);

    const user = await User.create(u);

    return res.json(user);
  },
};
