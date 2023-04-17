const router = require("express").Router();
const { createMessage } = require("../controllers/messageControllers");

router.route("/").post(createMessage);

module.exports = router;
