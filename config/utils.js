const jwt = require("jsonwebtoken");
const config = require("./config");
const moment = require("moment");

exports.getUpdateResetToken = function (userId, email) {
  const resetPasswordTokenExpiration = moment()
    .add(config.RESET_PASSWORD_EXPIRATION, "minutes")
    .format("YYYY-MM-DD HH:mm:ss");
  const updateToken = jwt.sign(
    {
      id: userId,
      email: email,
      tokenexpiration: `${resetPasswordTokenExpiration}`,
    },
    config.SECRET_KEY
  );

  return updateToken;
};

exports.getIp = function (req) {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  return ip;
};
