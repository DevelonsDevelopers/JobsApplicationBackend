const express = require('express')
const featuredController = require('../controllers/featured')

const router = express.Router();

router.get('/job/featured/all', featuredController.getAllFeatured);
router.post('/job/featured/get', featuredController.getFeaturedByID);
router.post('/job/featured/create', featuredController.createFeatured);
router.put('/job/featured/status', featuredController.statusFeatured);
router.put('/job/featured/update', featuredController.updateFeatured);
router.delete('/job/featured/:delete', featuredController.deleteFeatured);

module.exports = router;
