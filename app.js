const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const expressValidator = require('express-validator');
const multer = require('multer')

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
        "<h1 style='text-align: center'>Bienvenue sur SnapTechie Express Js API<br><br>👋</h1>"
    );
});
