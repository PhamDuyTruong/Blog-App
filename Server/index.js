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
const postRoute = require("./routers/posts");
const catRoute = require("./routers/categories");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URL;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb){
        const extensionImageList = [".png", ".jpg"];
        const extension = file.originalname.slice(-4);
        const check = extensionImageList.includes(extension);
        if(check){
            cb(null, true);
        }else{
            cb(new Error("extention không hợp lệ"))
        }
    }
});


app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
  

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/cat", catRoute);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    })
}).catch(err=> {
    console.log('Error: ', err)
});
