const express = require('express')
const cvController = require('../controllers/cv')

const router = express.Router();

router.get('/cv/all', cvController.getAllCV);
router.post('/cv/get', cvController.getCVByID);
router.post('/cv/user', cvController.getCVByUser);
router.post('/cv/check', cvController.CheckCV)
router.post('/cv/statement', cvController.updatePersonalStatement)

module.exports = router;
