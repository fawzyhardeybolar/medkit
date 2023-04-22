const router = require("express").Router();
const { createMessage, getMessages } = require("../controllers/messageControllers");

router.route("/").post(createMessage).get(getMessages);

module.exports = router;
