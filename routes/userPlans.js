const express = require('express')
const userPlansController = require('../controllers/userPlans')

const router = express.Router();

router.get('/job/userPlans/all', userPlansController.getAllUserPlans);
router.post('/job/userPlans/id', userPlansController.getUserPlan);
router.post('/job/userPlans/create', userPlansController.createUserPlan);

module.exports = router;
