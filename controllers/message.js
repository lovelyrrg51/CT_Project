const models = require("../models");
const httpStatus = require("http-status");

exports.getMessages = async (req, res, next) => {
  // eslint-disable-line
  models.Messages.findAll({})
    .then((Messages) => {
      if (!Messages)
        res
          .status(httpStatus.OK)
          .json({ status: "error", message: "Invalid Messages" });

      res.status(httpStatus.OK).json({ status: "success", Messages });
    })
    .catch((err) => {
      res.status(httpStatus.OK).json({ status: "error", message: err.message });
    });
};
