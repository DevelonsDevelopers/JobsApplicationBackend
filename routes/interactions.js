const express = require('express')
const interactionController = require('../controllers/interactions')

const router = express.Router();

router.get('/interactions/all', interactionController.getAllInteractions);
router.post('/interactions/get', interactionController.getInteractionByID);
router.post('/interactions/job', interactionController.getInteractionByJob);
router.post('/interactions/user', interactionController.getInteractionByUser);
router.post('/interactions/type', interactionController.getInteractionByType);
router.post('/interactions/create', interactionController.createInteraction);
router.put('/interactions/status', interactionController.statusInteraction);
router.put('/interactions/update', interactionController.updateInteraction);
router.delete('/interactions/delete', interactionController.deleteInteraction);

module.exports = router;
