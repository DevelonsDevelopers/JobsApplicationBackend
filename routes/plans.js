const express = require('express')
const planController = require('../controllers/plans')

const router = express.Router();

router.get('/plans/all', planController.getAllPlans);
router.post('/plans/get', planController.getPlanByID);
router.post('/plans/type', planController.getPlanByType);
router.post('/plans/create', planController.createPlan);
router.put('/plans/status', planController.statusPlan);
router.put('/plans/update', planController.updatePlan);
router.delete('/plans/delete', planController.deletePlan);

module.exports = router;
