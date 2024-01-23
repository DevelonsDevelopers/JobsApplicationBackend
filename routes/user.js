const express = require('express')
const userController = require('../controllers/user')

const router = express.Router();

router.get('/job/users/all', userController.getAllUsers);
router.post('/job/users/get', userController.getUserByID);
router.post('/job/users/create', userController.createUser);
router.put('/job/users/status', userController.statusUser);
router.put('/job/users/update', userController.updateUser);
router.delete('/job/users/delete', userController.deleteUser);

module.exports = router;
