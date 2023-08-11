const express = require('express')
const cvCourseController = require('../controllers/cvCourse')

const router = express.Router();

router.get('/cvCourse/all', cvCourseController.getAllCourse);
router.post('/cvCourse/create', cvCourseController.createCourse);
router.put('/cvCourse/:update', cvCourseController.updateCourse);
router.delete('/cvCourse/:delete', cvCourseController.deleteCourse);

module.exports = router;
