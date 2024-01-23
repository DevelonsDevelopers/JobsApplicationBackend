const express = require('express')
const adsController = require('../controllers/ads')

const router = express.Router();

router.get('/job/ads/get', adsController.getAds);
router.post('/job/ads/post', adsController.postAds);
router.put('/job/ads/update', adsController.updateAds);

module.exports = router;
