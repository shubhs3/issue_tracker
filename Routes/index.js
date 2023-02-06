const express = require("express");
const router = express.Router();
const homeController = require('../Controllers/homeController')
const projectRoutes = require('./projectRoutes');

router.get('/' , homeController.home );
router.use('/project' , projectRoutes);

module.exports = router;