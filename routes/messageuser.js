const express = require('express');

const router = express.Router();

const messageuser = require('../controllers/messageuser');

// uptime robot check
router.post('/receive_message_user', messageuser.receiveMessageUser);

module.exports = router;
