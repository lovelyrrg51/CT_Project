const models = require("../models");
const httpStatus = require("http-status");
const utils = require("../config/utils");
const passport = require("passport");

//router.post('/login', limiterMiddleware, (req, res, next) => {
exports.loginUser = async (req, res, next) => {
  passport.authenticate("local-signin", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ status: "Error", error: info.message });
    }

    const token = utils.getUpdateResetToken(user.id, user.email);

    return res.status(httpStatus.OK).json({ status: "success", token });
  })(req, res, next);
};
