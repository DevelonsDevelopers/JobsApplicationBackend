const express = require('express')
const cvEducationController = require('../controllers/cvEducation')

const router = express.Router();

router.get('/job/cvEducation/all', cvEducationController.getAllEducations);
router.post('/job/cvEducation/create', cvEducationController.createEducation);
router.put('/job/cvEducation/update', cvEducationController.updateEducation);
router.delete('/job/cvEducation/delete', cvEducationController.deleteEducation);

module.exports = router;
