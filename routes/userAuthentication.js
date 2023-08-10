const express = require('express')
const authenticationController = require('../controllers/userAuthentication')

const router = express.Router();

router.post('/userAuth/register', authenticationController.register);
router.post('/userAuth/login', authenticationController.login);

module.exports = router;
