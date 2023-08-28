const express = require('express')
const transactionController = require('../controllers/transactions')

const router = express.Router();

router.get('/transactions/all', transactionController.getAllTransactions);
router.post('/transactions/get', transactionController.getTransactionByID);
router.post('/transactions/create', transactionController.createTransaction);
router.put('/transactions/status', transactionController.statusTransaction);
router.put('/transactions/update', transactionController.updateTransaction);
router.delete('/transactions/delete', transactionController.deleteTransaction);

module.exports = router;
