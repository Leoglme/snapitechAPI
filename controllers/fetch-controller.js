const categoriesModel = require('../models/categories-model');
const projectsModel = require("../models/projects-model");
module.exports={
    getCategories:function(req, res){
        categoriesModel.getCategories(function(data){
            res.send(data)
        })
    },
    getProjects:function(req, res){
        projectsModel.getProjects(function(data){
            console.log("CONTROLLER DATA", data);
            res.send(data)
        })
    }
}
