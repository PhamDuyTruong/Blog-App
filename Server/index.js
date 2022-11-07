const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routers/auth");
const userRoute = require("./routers/users");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URL;

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    })
}).catch(err=> {
    console.log('Error: ', err)
});
