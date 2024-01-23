const express = require('express')
const categoryController = require('../controllers/category')

const router = express.Router();

router.get('/job/categories/all', categoryController.getAllCategories);
router.get('/job/categories/featured', categoryController.getFeaturedCategories);
router.post('/job/categories/get', categoryController.getCategoryByID);
router.post('/job/categories/create', categoryController.createCategory);
router.put('/job/categories/status', categoryController.statusCategory);
router.put('/job/categories/:update', categoryController.updateCategory);
router.delete('/job/categories/:delete', categoryController.deleteCategory);

module.exports = router;
