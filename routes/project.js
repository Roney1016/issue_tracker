const express = require('express');
const controller = require('../controllers/projectController')
const router = express.Router();
//render the create project page
router.get('/create-form',controller.projectForm)

router.post('/create',controller.create)


module.exports = router;
