const express = require('express')
const appliedController = require('../controllers/applied')

const router = express.Router();

router.get('/job/applied/all', appliedController.getAllApplied);
router.post('/job/applied/company', appliedController.getAppliedByCompany);
router.post('/job/applied/get', appliedController.getAppliedByID);
router.post('/job/applied/user', appliedController.getAppliedByUser);
router.post('/job/applied/job', appliedController.getAppliedByJob);
router.post('/job/applied/create', appliedController.applyJob);
router.put('/job/applied/status', appliedController.statusAppliedJob);
router.put('/job/applied/:update', appliedController.updateAppliedJob);
router.delete('/job/applied/:delete', appliedController.deleteAppliedJob);

module.exports = router;
