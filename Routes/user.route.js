const express = require('express');
const router = express.Router();
const controller = require("../Controllers/user.controller")

router.get('/', controller.getAll)
router.post('/', controller.postData)
router.put('/:id', controller.putData)
router.delete('/:id', controller.deleteData)

router.post("/login", controller.login)
router.get("/logout", controller.logout)

module.exports = router;
