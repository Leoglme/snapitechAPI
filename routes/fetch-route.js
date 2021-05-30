const express = require('express');
const router = express.Router();
const fetchController = require("../controllers/fetch-controller");
router.get('/categories',fetchController.getCategories);
router.get('/projects',fetchController.getProjects);
module.exports = router;
