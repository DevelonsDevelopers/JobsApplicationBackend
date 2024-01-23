const express = require('express')
const authenticationController = require('../controllers/userAuthentication')

const router = express.Router();

router.post('/job/userAuth/register', authenticationController.register);
router.post('/job/userAuth/login', authenticationController.login);

module.exports = router;
