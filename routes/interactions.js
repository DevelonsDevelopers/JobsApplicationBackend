const express = require('express')
const interactionController = require('../controllers/interactions')

const router = express.Router();

router.get('/job/interactions/all', interactionController.getAllInteractions);
router.post('/job/interactions/get', interactionController.getInteractionByID);
router.post('/job/interactions/job', interactionController.getInteractionByJob);
router.post('/job/interactions/company', interactionController.getInteractionByCompany);
router.post('/job/interactions/user', interactionController.getInteractionByUser);
router.post('/job/interactions/type', interactionController.getInteractionByType);
router.post('/job/interactions/create', interactionController.createInteraction);
router.put('/job/interactions/status', interactionController.statusInteraction);
router.put('/job/interactions/update', interactionController.updateInteraction);
router.delete('/job/interactions/delete', interactionController.deleteInteraction);

module.exports = router;
