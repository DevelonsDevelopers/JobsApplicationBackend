const express = require('express')
const cvInterestController = require('../controllers/cvInterest')

const router = express.Router();

router.get('/job/cvInterest/all', cvInterestController.getAllInterests);
router.post('/job/cvInterest/create', cvInterestController.createInterest);
router.put('/job/cvInterest/update', cvInterestController.updateInterest);
router.delete('/job/cvInterest/delete', cvInterestController.deleteInterest);

module.exports = router;
