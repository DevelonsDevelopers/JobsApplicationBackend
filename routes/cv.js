const express = require('express')
const cvController = require('../controllers/cv')

const router = express.Router();

router.get('/job/cv/all', cvController.getAllCV);
router.post('/job/cv/get', cvController.getCVByID);
router.post('/job/cv/user', cvController.getCVByUser);
router.post('/job/cv/check', cvController.CheckCV)
router.post('/job/cv/statement', cvController.updatePersonalStatement)

module.exports = router;
