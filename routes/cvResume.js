const express = require('express')
const cvResumeController = require('../controllers/cvResume')

const router = express.Router();

router.get('/cvResume/all', cvResumeController.getAllResume);
router.post('/cvResume/create', cvResumeController.createResume);
router.put('/cvResume/update', cvResumeController.updateResume);
router.delete('/cvResume/delete', cvResumeController.deleteResume);

module.exports = router;
