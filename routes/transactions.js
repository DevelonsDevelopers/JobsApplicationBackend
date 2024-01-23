const express = require('express')
const transactionController = require('../controllers/transactions')

const router = express.Router();

router.get('/job/transactions/all', transactionController.getAllTransactions);
router.post('/job/transactions/get', transactionController.getTransactionByID);
router.post('/job/transactions/create', transactionController.createTransaction);
router.put('/job/transactions/status', transactionController.statusTransaction);
router.put('/job/transactions/update', transactionController.updateTransaction);
router.delete('/job/transactions/delete', transactionController.deleteTransaction);

module.exports = router;
