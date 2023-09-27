const express = require('express')
const authenticationController = require('../controllers/companyAuthentication')

const router = express.Router();

router.post('/providerAuth/register', authenticationController.register);
router.post('/providerAuth/login', authenticationController.login);
router.post('/providerAuth/google', authenticationController.google);
router.post('/providerAuth/password', authenticationController.changePassword)

module.exports = router;
