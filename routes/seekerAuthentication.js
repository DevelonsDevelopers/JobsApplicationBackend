const express = require('express')
const authenticationController = require('../controllers/seekerAuthentication')

const router = express.Router();

router.post('/seekerAuth/register', authenticationController.register);
router.post('/seekerAuth/login', authenticationController.login);
router.post('/seekerAuth/google', authenticationController.google);
router.post('/seekerAuth/password', authenticationController.changePassword)

module.exports = router;
