const postControllers = require("../controllers/postControllers");

const router = require("express").Router();

router.post("/", postControllers.createPost);

module.exports = router;


