const express = require('express');
const router = express.Router();
const controller = require("../Controllers/user.controller")


router.get('/', controller.authToken , controller.getAll)
router.post('/', controller.authToken, controller.postData)
router.put('/:id', controller.authToken, controller.putData)
router.delete('/:id', controller.authToken, controller.deleteData)

router.post("/login", controller.login)

router.get("/logout", controller.authToken ,controller.logout)
router.get("/test", controller.authToken ,controller.testData)

module.exports = router;
