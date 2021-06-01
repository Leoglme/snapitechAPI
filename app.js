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
const fetch = require('node-fetch');
app.listen(port, hostname, () => {
    console.log("bien connecté");
    console.log(`Server running at https://${hostname}:${port}`);
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Bienvenue sur SnapTech Express Js API<br><br>👋</h1>"
    );
});

app.post('/api/upload', async (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const snap_image = req.body.snap_image;
    const snap_duration = req.body.snap_duration;

    let newSnap = new Snaps({
        sender: sender,
        receiver: receiver,
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

app.get('/snaps/:email', async (req, res) => {
    const snaps = await Snaps.find({receiver: req.params.email}).sort({'updatedAt': -1});
    res.status(200).json({
        data: snaps,
        success: true,
    })
})

app.put('/snap/:id', async (req, res) => {
    let cond = {_id: req.params.id};
    let update = {
        newChat: false,
        snap_image: null
    };
    let opts = {
        upsert: true,
        new: true
    };
    let updatedSnaps = Snaps.findByIdAndUpdate(cond, update, opts)
        .then((r) => res.status(200).json({
            snap: r,
            success: true,
        }))
        .catch((err) => res.status(500).json({
            error: err,
            success: false,
        }));
})

app.post('/upload/imgur', (req, res, next) => {
    const apiKey = req.body.apiKey;
    const data = req.body.image;

    fetch('https://api.imgur.com/3/image/g4Jyo7L', {
        method: 'GET',
        headers: {
            Authorization: 'Client-ID dc6e79e2ed95c6b'
        }
    }).then(r => res.status(200).json({
        data: r,
        success: true,
    }))
        .catch(error => res.status(511).json({
            data: error,
            success: false,
        }))
})
