const express = require('express')
const reportsController = require('../controllers/reports')

const router = express.Router();

router.get('/reports/all', reportsController.getAllReports);
router.get('/reports/:get', reportsController.getReportByID);
router.post('/reports/create', reportsController.createReport);
router.put('/reports/status', reportsController.statusReport);
router.put('/reports/:update', reportsController.updateReport);
router.delete('/reports/:delete', reportsController.deleteReport);

module.exports = router;
