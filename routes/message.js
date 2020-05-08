const express = require("express");

const router = express.Router();

const messagetoken = require("../controllers/message");

// uptime robot check
router.post("/get_messages", messagetoken.getMessages);

module.exports = router;
