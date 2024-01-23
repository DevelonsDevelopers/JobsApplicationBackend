const express = require('express')
const cityController = require('../controllers/city')

const router = express.Router();

router.get('/job/cities/all', cityController.getAllCities);
router.post('/job/cities/get', cityController.getCityByID);
router.post('/job/cities/country', cityController.getCityByCountry);
router.post('/job/cities/create', cityController.createCity);
router.put('/job/cities/status', cityController.statusCity);
router.put('/job/cities/update', cityController.updateCity);
router.delete('/job/cities/delete', cityController.deleteCity);

module.exports = router;
