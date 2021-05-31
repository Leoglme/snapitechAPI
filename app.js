const express = require("express");
const app = express();
const cors = require("cors");
const Snaps = require('./models/snaps-model')
app.use(cors({origin: "*"}));
app.use(express.static('public'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
const db = require('./database');

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
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const snap_image = req.body.snap_image;
    const snap_duration = req.body.snap_duration;

    let newSnap = new Snaps({
        sender = sender,
        receiver = receiver,
        snap_image: snap_image,
        snap_duration: snap_duration
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
