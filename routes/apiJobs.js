const express = require('express')
const apiJobsController = require('../controllers/apiJobs')
const router = express.Router();

router.get('/api/apiJobs/all', apiJobsController.getAllApiJobs);
router.post('/api/apiJobs/job', apiJobsController.getJob)
router.post('/api/apiJobs/post', apiJobsController.addApiJobs);

module.exports = router;
