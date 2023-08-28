const express = require('express')
const featuredController = require('../controllers/featured')

const router = express.Router();

router.get('/featured/all', featuredController.getAllFeatured);
router.post('/featured/get', featuredController.getFeaturedByID);
router.post('/featured/create', featuredController.createFeatured);
router.put('/featured/status', featuredController.statusFeatured);
router.put('/featured/update', featuredController.updateFeatured);
router.delete('/featured/:delete', featuredController.deleteFeatured);

module.exports = router;
