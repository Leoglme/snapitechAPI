const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const expressValidator = require('express-validator');
const multer = require('multer')
router.use(expressValidator())

app.use(bodyParser.json());
//port
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
    console.log("bien connecté");
    console.log(`Server running at https://${hostname}:${port}`);
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Bienvenue sur SnapTechie Express Js API<br><br>👋</h1>"
    );
});
const snapStorage = multer.diskStorage({
    destination: (req, image, callBack) => {
        callBack(null, 'assets')
    },
    filename: (req, image, callBack) => {
        callBack(null, image.name.filename)
    }
})

let snapUpload = multer({storage: snapStorage, dest: '../assets'})

app.post('/snap',function (req, res, next) {
    console.log({BODY: req.body, IMAGE: req.image});
    res.status(200).json({
        populateArticle: "populateArticle",
    })
})
