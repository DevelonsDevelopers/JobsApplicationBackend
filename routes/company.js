const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router();

router.get('/companies/all',  companyController.getAllCompanies);
router.post('/companies/get', companyController.getCompanyByID);
router.post('/companies/create', companyController.createCompany);
router.put('/companies/status', companyController.statusCompany);
router.put('/companies/update', companyController.updateCompany);
router.put('/companies/complete', companyController.completeCompany);
router.delete('/companies/delete', companyController.deleteCompany);

module.exports = router;
