const express = require('express')
const jobsController = require('../controllers/jobs')

const router = express.Router();

router.post('/job/jobs/all', jobsController.getAllJobs);
router.post('/job/jobs/jobs', jobsController.getJobs);
router.post('/job/jobs/recommended', jobsController.getRecommendedJobs)
router.get('/job/jobs/recent', jobsController.getRecentJobs);
router.post('/job/jobs/search', jobsController.getSearch);
router.post('/job/jobs/get', jobsController.getJobByID);
router.post('/job/jobs/category', jobsController.getJobByCategory);
router.post('/job/jobs/country', jobsController.getJobByCountry);
router.post('/job/jobs/city', jobsController.getJobByCity);
router.post('/job/jobs/company', jobsController.getJobByCompany);
router.post('/job/jobs/provider', jobsController.getJobsByProvider);
router.post('/job/jobs/providerFeatured', jobsController.getJobsByProviderFeatured);
router.post('/job/jobs/create', jobsController.createJob);
router.put('/job/jobs/status', jobsController.statusJob);
router.put('/job/jobs/update', jobsController.updateJob);
router.delete('/job/jobs/delete', jobsController.deleteJob);

module.exports = router;
