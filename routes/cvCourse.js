const express = require('express')
const cvCourseController = require('../controllers/cvCourse')

const router = express.Router();

router.get('/job/cvCourse/all', cvCourseController.getAllCourse);
router.post('/job/cvCourse/create', cvCourseController.createCourse);
router.put('/job/cvCourse/update', cvCourseController.updateCourse);
router.delete('/job/cvCourse/delete', cvCourseController.deleteCourse);

module.exports = router;
