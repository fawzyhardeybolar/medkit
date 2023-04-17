const router = require("express").Router();
const { subscribe } = require("../controllers/subControllers");

router.post("/subscribe", subscribe);

module.exports = router;
