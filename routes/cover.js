const express = require('express')
const coverController = require('../controllers/cover')

const router = express.Router();

router.post('/job/cover/id', coverController.getCoverByID);
router.post('/job/cover/user', coverController.getCoverByUser)
router.post('/job/cover/job', coverController.getCoverByJob);
router.post('/job/cover/create', coverController.createCover);

module.exports = router;
