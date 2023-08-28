const express = require('express')
const cityController = require('../controllers/City')

const router = express.Router();

router.get('/cities/all', cityController.getAllCities);
router.post('/cities/get', cityController.getCityByID);
router.post('/cities/country', cityController.getCityByCountry);
router.post('/cities/create', cityController.createCity);
router.put('/cities/status', cityController.statusCity);
router.put('/cities/update', cityController.updateCity);
router.delete('/cities/delete', cityController.deleteCity);

module.exports = router;
