const express = require('express')
const planController = require('../controllers/plans')

const router = express.Router();

router.get('/job/plans/all', planController.getAllPlans);
router.post('/job/plans/get', planController.getPlanByID);
router.post('/job/plans/type', planController.getPlanByType);
router.post('/job/plans/create', planController.createPlan);
router.put('/job/plans/status', planController.statusPlan);
router.put('/job/plans/update', planController.updatePlan);
router.delete('/job/plans/delete', planController.deletePlan);

module.exports = router;
