require("dotenv").config();

var io = null;
var connections = {};
var botCount = 0;

exports.initSocket = function (server) {
  io = require("socket.io")(server);
  io.on("connection", (socket) => {
    io.emit("user_joined", { message: "User joined!", name: socket.id });
    botCount++;
    connections[socket.id] = socket;
    console.log("User joined:", socket.id);
    console.log("Total Connection:", botCount);

    // Send greetings
    socket.emit("greeting", {
      message: `Welcome to here! ${botCount} users are connected. Thanks.`,
    });

    socket.on("custom_message", (data) => {
      console.log(`Received custom_message`, data, socket);
    });

    socket.on("disconnect", () => {
      io.emit("user_left", { message: "User left!", name: socket.id });
      botCount--;
      delete connections[socket.id];
      console.log("User left:", socket.id);
      console.log("Total Connection:", botCount);
    });
  });
};

exports.sendMessage = function (message) {
  if (!io) return;
  io.emit("messages", { message });
};
