const passport = require("passport");

const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//model de user
require("../models/User");
const User = mongoose.model("User");

module.exports = function (passport) {
  //campo que vai ser analizado
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        User.findOne({ email: email }).then((user) => {
          if (!user) {
            return done(null, false, {
              message: "This account does not exist",
            });
          }

          bcrypt.compare(password, User.password, (error, correct) => {
            if (correct) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Incorrect password" });
            }
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, User);
    });
  });
};
