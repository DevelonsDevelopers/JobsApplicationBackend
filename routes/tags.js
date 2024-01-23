const express = require('express')
const tagsController = require('../controllers/tags')

const router = express.Router();

router.get('/job/tags/all', tagsController.getAllTags);
router.post('/job/tags/get', tagsController.getTagByID);
router.post('/job/tags/top', tagsController.getTopTags)
router.post('/job/tags/create', tagsController.createTag);
router.put('/job/tags/status', tagsController.statusTag);
router.put('/job/tags/update', tagsController.updateTag);
router.delete('/job/tags/delete', tagsController.deleteTag);

module.exports = router;
