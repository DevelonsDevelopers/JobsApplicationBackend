const express = require('express')
const authenticationController = require('../controllers/companyAuthentication')

const router = express.Router();

router.post('/job/providerAuth/register', authenticationController.register);
router.post('/job/providerAuth/login', authenticationController.login);
router.post('/job/providerAuth/google', authenticationController.google);
router.post('/job/providerAuth/password', authenticationController.changePassword)

module.exports = router;
