const express = require('express')
const countryController = require('../controllers/country')

const router = express.Router();

router.get('/countries/all', countryController.getAllCountries);
router.post('/countries/get', countryController.getCountryByID);
router.post('/countries/create', countryController.createCountry);
router.put('/countries/status', countryController.statusCountry);
router.put('/countries/update', countryController.updateCountry);
router.delete('/countries/delete', countryController.deleteCountry);

module.exports = router;
