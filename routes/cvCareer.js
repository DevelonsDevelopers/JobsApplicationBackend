const express = require('express')
const cvCareerController = require('../controllers/cvCareer')

const router = express.Router();

router.get('/cvCareer/all', cvCareerController.getAllCareers);
router.post('/cvCareer/create', cvCareerController.createCareer);
router.put('/cvCareer/update', cvCareerController.updateCareer);
router.delete('/cvCareer/delete', cvCareerController.deleteCareer);

module.exports = router;
