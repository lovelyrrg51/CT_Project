const express = require("express");

const router = express.Router();

const messagetoken = require("../controllers/messagetoken");

// uptime robot check
router.post("/receive_message_token", messagetoken.receiveMessageToken);

module.exports = router;
