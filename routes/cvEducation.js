const express = require('express')
const cvEducationController = require('../controllers/cvEducation')

const router = express.Router();

router.get('/cvEducation/all', cvEducationController.getAllEducations);
router.post('/cvEducation/create', cvEducationController.createEducation);
router.put('/cvEducation/update', cvEducationController.updateEducation);
router.delete('/cvEducation/delete', cvEducationController.deleteEducation);

module.exports = router;
