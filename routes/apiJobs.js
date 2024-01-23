const express = require('express')
const apiJobsController = require('../controllers/apiJobs')
const router = express.Router();

router.get('/job/apiJobs/all', apiJobsController.getAllApiJobs);
router.post('/job/apiJobs/jobs', apiJobsController.getAllApiJobsData)
router.post('/job/apiJobs/recent', apiJobsController.getRecentApiJobsData)
router.post('/job/apiJobs/job', apiJobsController.getJob)
router.post('/job/apiJobs/post', apiJobsController.addApiJobs);
router.get('/job/apiJobs/careerAustralia', apiJobsController.australiaJobs)
router.get('/job/apiJobs/careerNewZealand', apiJobsController.newzealandJobs)

module.exports = router;
