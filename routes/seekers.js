const express = require('express')
const seekersController = require('../controllers/seekers')

const router = express.Router();

router.get('/job/seekers/all', seekersController.getAllSeeker);
router.post('/job/seekers/recommended', seekersController.getRecommendedSeekers)
router.post('/job/seekers/get', seekersController.getSeekerByID);
router.post('/job/seekers/email', seekersController.getSeekerByEmail);
router.post('/job/seekers/check', seekersController.checkSeeker);
router.post('/job/seekers/create', seekersController.createSeeker);
router.put('/job/seekers/status', seekersController.statusSeeker);
router.put('/job/seekers/role', seekersController.roleSeeker);
router.put('/job/seekers/update', seekersController.updateSeeker);
router.put('/job/seekers/verify', seekersController.verifySeeker);
router.delete('/job/seekers/delete', seekersController.deleteSeeker);

module.exports = router;
