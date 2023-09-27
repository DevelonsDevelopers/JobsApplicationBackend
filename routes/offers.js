const express = require('express')
const offerController = require('../controllers/offers')

const router = express.Router();

router.get('/offers/all', offerController.getAllOffers);
router.post('/offers/id', offerController.getOfferByID);
router.post('/offers/company', offerController.getOffersByCompany);
router.post('/offers/job', offerController.getOffersByJob);
router.post('/offers/user', offerController.getOffersByUser);
router.post('/offers/create', offerController.createOffer);
router.post('/offers/update', offerController.updateOfferStatus);

module.exports = router;
