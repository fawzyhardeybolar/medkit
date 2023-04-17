const router = require("express").Router();
const { auth } = require("../middleware/auth");
const { createAppointment } = require("../controllers/aptControllers");

router.route("/").post(auth, createAppointment);

module.exports = router;
