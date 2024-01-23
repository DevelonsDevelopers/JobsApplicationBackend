const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router();

router.get('/job/companies/all',  companyController.getAllCompanies);
router.post('/job/companies/get', companyController.getCompanyByID);
router.post('/job/companies/create', companyController.createCompany);
router.put('/job/companies/status', companyController.statusCompany);
router.put('/job/companies/update', companyController.updateCompany);
router.put('/job/companies/complete', companyController.completeCompany);
router.put('/job/companies/registration', companyController.completeRegistration)
router.put('/job/companies/verify', companyController.verifyCompany)
router.delete('/job/companies/delete', companyController.deleteCompany);

module.exports = router;
