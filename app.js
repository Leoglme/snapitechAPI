const express = require("express");
const app = express();
const cors = require("cors");
const Snaps = require('models/snaps-model')
app.use(cors({origin: "*"}));
app.use(express.static('public'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
const db = require('database');

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

app.post('/api/upload', async (req, res) => {
    const id_snap = req.body.id_snap;
    const snap_image = req.body.snap_image;

    let newSnap = new Snaps({
        id_snap: id_snap,
        snap_image: snap_image
    });
    await newSnap.save(function (err) {
        if (err) {
            console.log(err);
            res.status(500).json({
                success: false,
            })
        } else {
            res.status(200).json({
                success: true,
            })
        }
    })
});
