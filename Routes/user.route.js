const express = require('express');
const router = express.Router();
const controller = require("../Controllers/user.controller")
router.get('/', controller.getAll)

module.exports = router;
