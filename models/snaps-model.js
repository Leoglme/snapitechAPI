const mongoose = require('mongoose');
const db = require('../database');


/*Member schema*/
const snaps = new mongoose.Schema({
    sender: {
        type: String
    },
    receiver: {
        type: String
    },
    snap_image: {
        type: String
    },
    snap_duration: {
        type: Number
    },
    newChat: {
        type: Boolean,
        default: true
    }
}, {timestamps: true, collection: 'snaps'})
const Snaps = module.exports = mongoose.model('snaps', snaps);
