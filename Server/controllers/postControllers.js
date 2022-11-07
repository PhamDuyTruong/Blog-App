const User = require("../models/User");
const Post = require("../models/Post");

const postControllers = {
  createPost: async(req, res) => {
    const newPost = await Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }

  }
};

module.exports = postControllers