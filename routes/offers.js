const express = require('express')
const offerController = require('../controllers/offers')

const router = express.Router();

router.get('/job/offers/all', offerController.getAllOffers);
router.post('/job/offers/id', offerController.getOfferByID);
router.post('/job/offers/company', offerController.getOffersByCompany);
router.post('/job/offers/job', offerController.getOffersByJob);
router.post('/job/offers/user', offerController.getOffersByUser);
router.post('/job/offers/create', offerController.createOffer);
router.post('/job/offers/update', offerController.updateOfferStatus);

module.exports = router;
