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

  },
  getPostById: async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
  },
  getAllPost: async(req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
          posts = await Post.find({ username });
        } else if (catName) {
          posts = await Post.find({
            categories: {
              $in: [catName],
            },
          });
        } else {
          posts = await Post.find();
        }
        res.status(200).json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
  }
};

module.exports = postControllers