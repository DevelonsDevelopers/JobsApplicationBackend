const express = require('express')
const paymentController = require('../controllers/payment')

const router = express.Router()

router.get('/job/payment/get', paymentController.getPaymentCredentials)
router.get('/job/payment/getStripe', paymentController.getStripe)
router.get('/job/payment/getPaypal', paymentController.getPaypal)
router.put('/job/payment/update', paymentController.updatePaymentCredentials)
router.put('/job/payment/stripe', paymentController.updateStripe)
router.put('/job/payment/paypal', paymentController.updatePaypal)

module.exports = router;
