const express = require('express')
const paymentController = require('../controllers/payment')

const router = express.Router()

router.get('/payment/get', paymentController.getPaymentCredentials)
router.get('/payment/getStripe', paymentController.getStripe)
router.get('/payment/getPaypal', paymentController.getPaypal)
router.put('/payment/update', paymentController.updatePaymentCredentials)
router.put('/payment/stripe', paymentController.updateStripe)
router.put('/payment/paypal', paymentController.updatePaypal)

module.exports = router;
