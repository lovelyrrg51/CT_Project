const express = require("express");

const router = express.Router();

const user = require("../controllers/user");

// uptime robot check
router.post("/login", user.loginUser);

module.exports = router;
