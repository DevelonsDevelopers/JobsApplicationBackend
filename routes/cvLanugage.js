const express = require('express')
const cvLanguageController = require('../controllers/cvLanguages')

const router = express.Router();

router.get('/cvLanguage/all', cvLanguageController.getLanguages);
router.post('/cvLanguage/create', cvLanguageController.createLanguage);
router.put('/cvLanguage/update', cvLanguageController.updateLanguage);
router.delete('/cvLanguage/delete', cvLanguageController.deleteLanguage);

module.exports = router;
