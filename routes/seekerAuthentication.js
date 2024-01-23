const express = require('express')
const authenticationController = require('../controllers/seekerAuthentication')

const router = express.Router();

router.post('/job/seekerAuth/register', authenticationController.register);
router.post('/job/seekerAuth/login', authenticationController.login);
router.post('/job/seekerAuth/google', authenticationController.google);
router.post('/job/seekerAuth/password', authenticationController.changePassword)

module.exports = router;
