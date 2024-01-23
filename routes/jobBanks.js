const express = require('express')
const jobBanksController = require('../controllers/jobBanks')

const router = express.Router();

router.get('/job/jobBanks/all', jobBanksController.getAllJobBanks);
router.post('/job/jobBanks/create', jobBanksController.createJobBank);
router.put('/job/jobBanks/:update', jobBanksController.updateJobBank);
router.delete('/job/jobBanks/:delete', jobBanksController.deleteJobBank);

module.exports = router;
