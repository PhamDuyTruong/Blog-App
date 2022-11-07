const userControllers = require("../controllers/userControllers");
const { route } = require("./auth");

const router = require("express").Router();

// Get user
router.get("/", userControllers.getAllUser);
router.get("/:id", userControllers.getUserById);

// Update user
router.put("/:id", userControllers.updateUser);
//Delete user


module.exports = router;