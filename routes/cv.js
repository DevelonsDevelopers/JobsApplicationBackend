const express = require('express')
const cvController = require('../controllers/cv')

const router = express.Router();

router.get('/cv/all', cvController.getAllCV);
router.post('/cv/get', cvController.getCVByID);
router.post('/cv/user', cvController.getCVByUser);

module.exports = router;
