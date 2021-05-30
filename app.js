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
multer({
    limits: {fieldSize: 25 * 1024 * 1024},
});

const Storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './images');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
});

app.get('/', (req, res) => {
    res.status(200).send('to upload image use this  /api/upload.');
});

app.post('/api/upload', (req, res) => {
    let upload = multer({storage: Storage}).single('file');
    console.log(req)
    upload(req, res, function (err) {
        if (!req.file) {
            return res.send('Pleassse select an image to upload');
        } else if (err instanceof multer.MulterError) {
            return res.send(err);
        } else if (err) {
            return res.send(err);
        }
        // Display uploaded image for user validation
        res.send(req.file.path); // send uploaded image
    });
});
