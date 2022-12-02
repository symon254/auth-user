require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddle");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//express app
const app = express();

//middleware
app.use(express.json()); //we use this for sending data for example post and patch
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use("/api/users", userRoute);

//routes
app.get("/", (req, res) => {
    res.send("home page");
});
//error handler
app.use(errorHandler);
// conect to db
mongoose
    .connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to database and listen on port:",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
