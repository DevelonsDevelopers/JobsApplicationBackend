const express = require('express')
const appliedController = require('../controllers/applied')

const router = express.Router();

router.get('/applied/all', appliedController.getAllApplied);
router.post('/applied/get', appliedController.getAppliedByID);
router.post('/applied/job', appliedController.getAppliedByJob);
router.post('/applied/create', appliedController.applyJob);
router.put('/applied/status', appliedController.statusAppliedJob);
router.put('/applied/:update', appliedController.updateAppliedJob);
router.delete('/applied/:delete', appliedController.deleteAppliedJob);

module.exports = router;
