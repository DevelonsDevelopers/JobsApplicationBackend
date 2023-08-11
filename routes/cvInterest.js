const express = require('express')
const cvInterestController = require('../controllers/cvInterest')

const router = express.Router();

router.get('/cvInterest/all', cvInterestController.getAllInterests);
router.post('/cvInterest/create', cvInterestController.createInterest);
router.put('/cvInterest/:update', cvInterestController.updateInterest);
router.delete('/cvInterest/:delete', cvInterestController.deleteInterest);

module.exports = router;
