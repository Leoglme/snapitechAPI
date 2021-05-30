const mongoose = require('mongoose');
const db = require('../database');
// create an schema
const categories = new mongoose.Schema({
    name: String,
    imageUrl: String,
    websiteUrl: String,
    languages: Array
}, { collection: 'categories'});
categoriesTable = mongoose.model('categories', categories);

module.exports = {

    getCategories: function (callback) {
        const userData = categoriesTable.find({});
        userData.exec(function (err, data) {
            console.log("DATAAAAAAAAAAAAAAA", data);
            if (err) throw err;
            return callback(data);
        })

    }
}
