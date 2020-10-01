const passport = require("passport");

const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

//model user
require("../models/User");
const User = mongoose.model("User");

module.exports = function (passport) {
  //campo que vai ser analizado
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        User.findOne({ email: email }).then((User) => {
          if (!User) {
            return done(null, false, {
              message: "This account does not exist",
            });
          }

          bcryptjs.compare(password, User.password, (err, correct) => {
            if (correct) {
              return done(null, User);
            } else {
              return done(null, false, { message: "Incorrect password" });
            }
          });
        });
      }
    )
  );

  passport.serializeUser((User, done) => {
    done(null, User.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, User) => {
      done(err, User);
    });
  });
};
