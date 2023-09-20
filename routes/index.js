const express = require('express');
const controller = require('../controllers/homeController')
const router = express.Router();

router.get('/',controller.home);
router.use('/project',require('./project'))

module.exports = router;