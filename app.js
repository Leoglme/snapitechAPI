const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const expressValidator = require('express-validator');
const multer = require('multer')
app.use(expressValidator())


String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
    console.log("bien connecté");
    console.log(`Server running at https://${hostname}:${port}`);
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Bienvenue sur DIBODEV SnapTech API<br><br>👋</h1>"
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
    console.log(req);
    res.status(200).json({
        populateArticle: "populateArticle",
    })
})
