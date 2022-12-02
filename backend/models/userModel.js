const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your NAME"],
        },
        email: {
            type: String,
            required: [true, "Please provide your EMAIL"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide your PASSWORD"],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
