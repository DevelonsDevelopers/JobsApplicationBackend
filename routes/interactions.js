const express = require('express')
const interactionController = require('../controllers/interactions')

const router = express.Router();

router.get('/interactions/all', interactionController.getAllInteractions);
router.get('/interactions/:get', interactionController.getInteractionByID);
router.get('/interactions/:job', interactionController.getInteractionByJob);
router.get('/interactions/:user', interactionController.getInteractionByUser);
router.get('/interactions/:type', interactionController.getInteractionByType);
router.post('/interactions/create', interactionController.createInteraction);
router.put('/interactions/status', interactionController.statusInteraction);
router.put('/interactions/:update', interactionController.updateInteraction);
router.delete('/interactions/:delete', interactionController.deleteInteraction);

module.exports = router;
