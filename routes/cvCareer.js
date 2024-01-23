const express = require('express')
const cvCareerController = require('../controllers/cvCareer')

const router = express.Router();

router.get('/job/cvCareer/all', cvCareerController.getAllCareers);
router.post('/job/cvCareer/create', cvCareerController.createCareer);
router.put('/job/cvCareer/update', cvCareerController.updateCareer);
router.delete('/job/cvCareer/delete', cvCareerController.deleteCareer);

module.exports = router;
