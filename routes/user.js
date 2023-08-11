const express = require('express')
const userController = require('../controllers/user')

const router = express.Router();

router.get('/users/all', userController.getAllUsers);
router.get('/users/:get', userController.getUserByID);
router.post('/users/create', userController.createUser);
router.put('/users/status', userController.statusUser);
router.put('/users/:update', userController.updateUser);
router.delete('/users/:delete', userController.deleteUser);

module.exports = router;
