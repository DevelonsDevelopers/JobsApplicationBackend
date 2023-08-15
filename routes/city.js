const express = require('express')
const cityController = require('../controllers/City')

const router = express.Router();

router.get('/cities/all', cityController.getAllCities);
router.get('/cities/:get', cityController.getCityByID);
router.get('/cities/:country', cityController.getCityByCountry);
router.post('/cities/create', cityController.createCity);
router.put('/cities/status', cityController.statusCity);
router.put('/cities/:update', cityController.updateCity);
router.delete('/cities/:delete', cityController.deleteCity);

module.exports = router;
