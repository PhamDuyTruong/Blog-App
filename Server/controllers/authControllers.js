const User = require("../models/User");
const bcrypt = require("bcrypt");

const authControllers = {
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass
        });
        const user = await newUser.save();
        res.status(200).json(user);
        } catch (error) {
            res.status(500).json(err);
        }
    }
};

module.exports = authControllers;