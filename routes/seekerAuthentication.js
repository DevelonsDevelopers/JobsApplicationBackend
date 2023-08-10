const express = require('express')
const authenticationController = require('../controllers/seekerAuthentication')

const router = express.Router();

router.post('/seekerAuth/register', authenticationController.register);
router.post('/seekerAuth/login', authenticationController.login);

module.exports = router;
