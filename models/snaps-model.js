const mongoose = require('mongoose');
const db = require('../database');


/*Member schema*/
const snaps = new mongoose.Schema({
    id_snap: {
        type: Number
    },
    snap_image: {
        type: String
    }
}, {collection: 'snaps'})
const Snaps = module.exports = mongoose.model('snaps', snaps);
