const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//creating a function to generate the tokens for us
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: "30d" });
};

//register user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Fill all fields");
    }

    //check if email exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("email already used");
    }

    // harsh password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    //create token
    const token = createToken(user._id);
    if (user) {
        const { _id, name, email } = user;
        res.status(201).json({
            _id,
            name,
            email,
            token,
        });
    } else {
        res.status(400);
        throw new Error("invalid user data");
    }
});

//login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    //create token
    const token = createToken(user._id);
    if (user && (await bcrypt.compare(password, user.password))) {
        const { _id, name, email } = user;
        res.json({
            _id,
            name,
            email,
            token,
        });
    } else {
        res.status(400);
        throw new Error("invalid credentials");
    }
});
//get user
const getUser = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(201).json({
        _id,
        name,
        email,
    });
});

module.exports = {
    registerUser,
    loginUser,
    getUser,
};
