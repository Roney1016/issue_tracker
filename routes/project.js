const express = require('express');
const controller = require('../controllers/projectController')
const router = express.Router();

router.get('/create-form',controller.projectForm)



module.exports = router;
