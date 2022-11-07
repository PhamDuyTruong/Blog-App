const categoryControllers = require("../controllers/categoryControllers");

const router = require("express").Router();

router.post("/", categoryControllers.createCategory);

module.exports = router;