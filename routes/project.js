const express = require('express');
const controller = require('../controllers/projectController')
const router = express.Router();
//render the create project page
router.get('/create-form',controller.projectForm)

router.post('/create',controller.create)

router.get('/details/:id',controller.projectDetails);
router.post('/createIssue/:id',controller.createIssue)

module.exports = router;
