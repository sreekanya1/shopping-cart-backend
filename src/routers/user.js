const router = require("express").Router();
const { getUserData } = require("../controllers/userController");

router.get("/user", getUserData);

module.exports = router;
