const router = require("express").Router();
const { auth } = require("../middleware/auth");
const {
  createAppointment,
  getAppointments,
} = require("../controllers/aptControllers");

router.route("/").post(createAppointment).get(getAppointments);

module.exports = router;
