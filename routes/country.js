const express = require('express')
const countryController = require('../controllers/country')

const router = express.Router();

router.get('/job/countries/all', countryController.getAllCountries);
router.post('/job/countries/get', countryController.getCountryByID);
router.post('/job/countries/create', countryController.createCountry);
router.put('/job/countries/status', countryController.statusCountry);
router.put('/job/countries/update', countryController.updateCountry);
router.delete('/job/countries/delete', countryController.deleteCountry);

module.exports = router;
