const express = require('express')
const reportsController = require('../controllers/reports')

const router = express.Router();

router.get('/job/reports/all', reportsController.getAllReports);
router.post('/job/reports/get', reportsController.getReportByID);
router.post('/job/reports/create', reportsController.createReport);
router.put('/job/reports/status', reportsController.statusReport);
router.put('/job/reports/update', reportsController.updateReport);
router.delete('/job/reports/delete', reportsController.deleteReport);

module.exports = router;
