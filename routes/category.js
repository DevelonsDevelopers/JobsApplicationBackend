const express = require('express')
const categoryController = require('../controllers/category')

const router = express.Router();

router.get('/categories/all', categoryController.getAllCategories);
router.get('/categories/:get', categoryController.getCategoryByID);
router.post('/categories/create', categoryController.createCategory);
router.put('/categories/status', categoryController.statusCategory);
router.put('/categories/:update', categoryController.updateCategory);
router.delete('/categories/:delete', categoryController.deleteCategory);

module.exports = router;
