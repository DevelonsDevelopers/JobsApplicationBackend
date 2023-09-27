const express = require('express')
const userPlansController = require('../controllers/userPlans')

const router = express.Router();

router.get('/userPlans/all', userPlansController.getAllUserPlans);
router.post('/userPlans/id', userPlansController.getUserPlan);
router.post('/userPlans/create', userPlansController.createUserPlan);

module.exports = router;
