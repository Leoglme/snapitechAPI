const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({origin: "*"}));
const multer = require('multer');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/assets/images')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${Math.floor(Date.now() / 100) + file.originalname}`)
    }
})

let upload = multer({storage: storage, dest: '../public/assets/images/'})

app.post('/api/upload', upload.single('file'), function (req, res, next) {
    console.log(req.body);
    console.log(req.body.file);
    console.log(req.file);
});
