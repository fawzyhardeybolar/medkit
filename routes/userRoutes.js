const express = require("express");
const router = express.Router();

const { signUp, allUsers, login } = require("../controllers/userControllers");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/users", allUsers);

module.exports = router;
