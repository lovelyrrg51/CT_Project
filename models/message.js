"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Messages",
    {
      companyId: DataTypes.INTEGER,
      stationId: DataTypes.INTEGER,
      cameraId: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {}
  );
  Message.associate = function (models) {
    // associations can be defined here
  };
  return Message;
};
