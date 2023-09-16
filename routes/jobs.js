const express = require('express')
const jobsController = require('../controllers/jobs')

const router = express.Router();

router.post('/jobs/all', jobsController.getAllJobs);
router.post('/jobs/recommended', jobsController.getRecommendedJobs)
router.get('/jobs/recent', jobsController.getRecentJobs);
router.post('/jobs/search', jobsController.getSearch);
router.post('/jobs/get', jobsController.getJobByID);
router.post('/jobs/category', jobsController.getJobByCategory);
router.post('/jobs/country', jobsController.getJobByCountry);
router.post('/jobs/city', jobsController.getJobByCity);
router.post('/jobs/company', jobsController.getJobByCompany);
router.post('/jobs/create', jobsController.createJob);
router.put('/jobs/status', jobsController.statusJob);
router.put('/jobs/update', jobsController.updateJob);
router.delete('/jobs/delete', jobsController.deleteJob);

module.exports = router;
