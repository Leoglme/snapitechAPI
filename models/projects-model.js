const mongoose = require('mongoose');
const db = require('../database');
// create an schema
const projects = new mongoose.Schema({
    language: String,
    imageUrl: String,
    btnDisable: String,
    rating: Number
}, { collection: 'projects' });
projectsTable = mongoose.model('projects', projects);

module.exports = {

    getProjects: function (callback) {
        const projectsData = projectsTable.find({});
        projectsData.exec(function (err, data) {
            console.log("DATAAAAAAAAAAAAAAA", data);
            if (err) throw err;
            return callback(data);
        })

    }
}
