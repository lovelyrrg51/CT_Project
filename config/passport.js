require("dotenv").config();

const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("./config");
const moment = require("moment");

module.exports = function (passport, Users) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        Users.findOne({
          where: {
            email,
            password,
          },
        })
          .then((user) => {
            if (!user) return done(null, false, { message: "Invalid User." });

            return done(null, user.get());
          })
          .catch((err) => done(err));
      }
    )
  );

  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.SECRET_KEY; // TODO: Change based on environment from config.json

  passport.use(
    "local-jwt",
    new JwtStrategy(opts, (jwtPayload, done) => {
      // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      if (moment().isAfter(jwtPayload.tokenexpiration)) {
        return done(null, false, {
          message: "Token already expired.",
        });
      }

      Users.findOne({
        where: {
          id: jwtPayload.id,
          email: jwtPayload.email,
        },
      })
        .then((user) => {
          if (!user) return done(null, false, { message: "User not found" });

          return done(null, user.get());
        })
        .catch((err) => done(err));
    })
  );
};
