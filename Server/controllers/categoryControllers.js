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
    getAllCategory: async(req, res) => {
        try {
            const cat = await Category.find();
            res.status(200).json(cat);
        } catch (error) {
            res.status(500).json(error);
        }
    }

};

module.exports = categoryControllers;