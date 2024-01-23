const express = require('express')
const dashboardController = require('../controllers/dashboard')

const router = express.Router();

router.get('/job/dashboard/dashboard', dashboardController.getDashboard);
router.post('/job/dashboard/companyDashboard', dashboardController.getCompanyDashboard);
router.get('/job/dashboard/pieChart', dashboardController.getPieChart);
router.get('/job/dashboard/lineChart', dashboardController.getLineChart);
router.post('/job/dashboard/companyLineChart', dashboardController.getCompanyLineChart);
router.get('/job/dashboard/barChart', dashboardController.getBarChart);
router.get('/job/dashboard/transactions', dashboardController.getDashboardTransactions);
router.get('/job/dashboard/reports', dashboardController.getDashboardReports);

module.exports = router;
