const express = require("express");
const {
    registerUser,
    loginUser,
    getUser,
} = require("../controllers/userController");
const protect = require("../middleWare/authMiddle");
const router = express.Router();

//post
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuser", protect, getUser);

module.exports = router;
