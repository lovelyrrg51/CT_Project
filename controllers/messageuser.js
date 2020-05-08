const models = require("../models");
const httpStatus = require("http-status");
const utils = require("../config/utils");
const socket = require("../config/socketio");

exports.receiveMessageUser = async (req, res, next) => {
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.companyId ||
    !req.body.stationId ||
    !req.body.cameraId ||
    !req.body.message
  )
    return res
      .status(httpStatus.OK)
      .json({ status: "error", message: "Invalid Input Data" });

  return models.Users.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then((user) => {
      if (!user)
        return res
          .status(httpStatus.OK)
          .json({ status: "error", message: "Invalid User" });

      return models.Messages.create({
        companyId: req.body.cameraId,
        stationId: req.body.stationId,
        cameraId: req.body.cameraId,
        message: req.body.message,
      })
        .then((message) => {
          if (!message)
            return res
              .status(httpStatus.OK)
              .json({ status: "error", message: "Failed to upload message" });

          socket.sendMessage(message);
          return res
            .status(httpStatus.OK)
            .json({ status: "success", data: { message } });
        })
        .catch((err) => {
          return res
            .status(httpStatus.OK)
            .json({ status: "error", message: err.message });
        });
    })
    .catch((err) => {
      return res
        .status(httpStatus.OK)
        .json({ status: "error", message: err.message });
    });
};
