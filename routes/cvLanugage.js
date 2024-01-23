const express = require('express')
const cvLanguageController = require('../controllers/cvLanguages')

const router = express.Router();

router.get('/job/cvLanguage/all', cvLanguageController.getLanguages);
router.post('/job/cvLanguage/create', cvLanguageController.createLanguage);
router.put('/job/cvLanguage/update', cvLanguageController.updateLanguage);
router.delete('/job/cvLanguage/delete', cvLanguageController.deleteLanguage);

module.exports = router;
