const express = require('express')
const jobsController = require('../controllers/jobs')

const router = express.Router();

router.get('/jobs/all', jobsController.getAllJobs);
router.get('/jobs/:get', jobsController.getJobByID);
router.get('/jobs/:category', jobsController.getJobByCategory);
router.get('/jobs/:country', jobsController.getJobByCountry);
router.get('/jobs/:city', jobsController.getJobByCity);
router.get('/jobs/:company', jobsController.getJobByCompany);
router.post('/jobs/create', jobsController.createJob);
router.put('/jobs/status', jobsController.statusJob);
router.put('/jobs/:update', jobsController.updateJob);
router.delete('/jobs/:delete', jobsController.deleteJob);

module.exports = router;
