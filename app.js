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

let storage;

if (process.env.NODE_ENV === 'production') {
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'build'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
} else {
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, 'uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
        }
    })
}


const uploads = multer({ storage: storage });

app.use(uploads.any());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'build')));
} else {
    app.use(express.static('./public'));
}

//if you need to download (after upload) files in cloudinary
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
