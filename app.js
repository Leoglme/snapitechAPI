const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({origin: "*"}));
const multer = require('multer');
const path = require('path');
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
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dibodev',
    api_key: '281324594796175',
    api_secret: 'QZikpF9eEizalSePOqdqLCpZKAU'
});
//if you need to del files after upload
const fs = require('fs');

app.post('/api/upload', (req, res, next) => {
    console.log("req.files", req.files);

    // let urls = [];
    //
    // async function sendImagesToCloudinary() {
    //     for (let file of req.files) {
    //         await cloudinary.uploader.upload(
    //             file.path,
    //             {
    //                 public_id: `${Date.now()}`,
    //                 resource_type: 'auto'
    //             }
    //         ).then(result => {
    //             //del files after upload on cloudinary
    //             fs.unlink(file.path, function (err) {
    //                 if (err) {
    //                     console.log(err);
    //                 }
    //             });
    //             urls.push(result.url);
    //         })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     }
    //     res.json(urls);
    // }
    //
    // sendImagesToCloudinary().then(r => (console.log('r', r)));
});

// app.post('/api/upload', upload.single('file'), function (req, res, next) {
//     console.log(req.body);
//     console.log(req.body.file);
//     console.log(req.file);
// });
