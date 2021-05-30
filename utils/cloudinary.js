require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dibodev',
    api_key: '281324594796175',
    api_secret: 'QZikpF9eEizalSePOqdqLCpZKAU'
});

module.exports = { cloudinary };
