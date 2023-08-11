const express = require('express')
const cvController = require('../controllers/cv')

const router = express.Router();

router.get('/cv/all', cvController.getAllCV);
router.get('/cv/get', cvController.getCVByID);
router.get('/cv/user', cvController.getCVByUser);

module.exports = router;
