const Category = require("../models/Category");

const categoryControllers = {
    createCategory: async(req, res) => {
        const newCat = new Category(req.body);
        try {
          const savedCat = await newCat.save();
          res.status(200).json(savedCat);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    
};

module.exports = categoryControllers;