const express = require('express')
const dashboardController = require('../controllers/dashboard')

const router = express.Router();

router.get('/dashboard/dashboard', dashboardController.getDashboard);
router.get('/dashboard/pieChart', dashboardController.getPieChart);
router.get('/dashboard/lineChart', dashboardController.getLineChart);
router.get('/dashboard/barChart', dashboardController.getBarChart);
router.get('/dashboard/transactions', dashboardController.getDashboardTransactions);
router.get('/dashboard/reports', dashboardController.getDashboardReports);

module.exports = router;
