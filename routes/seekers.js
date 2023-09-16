const express = require('express')
const seekersController = require('../controllers/seekers')

const router = express.Router();

router.get('/seekers/all', seekersController.getAllSeeker);
router.post('/seekers/recommended', seekersController.getRecommendedSeekers)
router.post('/seekers/get', seekersController.getSeekerByID);
router.post('/seekers/create', seekersController.createSeeker);
router.put('/seekers/status', seekersController.statusSeeker);
router.put('/seekers/update', seekersController.updateSeeker);
router.put('/seekers/verify', seekersController.verifySeeker)
router.delete('/seekers/delete', seekersController.deleteSeeker);

module.exports = router;
