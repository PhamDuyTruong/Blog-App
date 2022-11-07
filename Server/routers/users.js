const userControllers = require("../controllers/userControllers");
const { route } = require("./auth");

const router = require("express").Router();

router.get("/", userControllers.getAllUser);
router.get("/:id", userControllers.getUserById);



module.exports = router;