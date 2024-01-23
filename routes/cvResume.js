const express = require('express')
const cvResumeController = require('../controllers/cvResume')

const router = express.Router();

router.get('/job/cvResume/all', cvResumeController.getAllResume);
router.post('/job/cvResume/create', cvResumeController.createResume);
router.put('/job/cvResume/update', cvResumeController.updateResume);
router.delete('/job/cvResume/delete', cvResumeController.deleteResume);

module.exports = router;
