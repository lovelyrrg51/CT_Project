// const passport = require('passport');
const userRouter = require("./user");
const messageTokenRouter = require("./messagetoken");
const messageUserRouter = require("./messageuser");
const messageRouter = require("./message");
const passport = require("passport");

module.exports = function (app) {
  app.use("/api/user", userRouter);
  app.use(
    "/api/messagetoken",
    passport.authenticate("local-jwt", { session: false }),
    messageTokenRouter
  );
  app.use("/api/messageuser", messageUserRouter);
  app.use(
    "/api/message",
    passport.authenticate("local-jwt", { session: false }),
    messageRouter
  );
};
