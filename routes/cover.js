const express = require('express')
const coverController = require('../controllers/cover')

const router = express.Router();

router.post('/cover/id', coverController.getCoverByID);
router.post('/cover/job', coverController.getCoverByJob);
router.post('/cover/create', coverController.createCover);

module.exports = router;
