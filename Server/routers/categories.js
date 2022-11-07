const categoryControllers = require("../controllers/categoryControllers");

const router = require("express").Router();

router.post("/", categoryControllers.createCategory);

router.get("/", categoryControllers.getAllCategory);

module.exports = router;