const postControllers = require("../controllers/postControllers");

const router = require("express").Router();

router.post("/", postControllers.createPost);

router.get("/", postControllers.getAllPost);
router.get("/:id", postControllers.getPostById);



module.exports = router;


