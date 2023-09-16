const express = require('express')
const tagsController = require('../controllers/tags')

const router = express.Router();

router.get('/tags/all', tagsController.getAllTags);
router.post('/tags/get', tagsController.getTagByID);
router.post('/tags/top', tagsController.getTopTags)
router.post('/tags/create', tagsController.createTag);
router.put('/tags/status', tagsController.statusTag);
router.put('/tags/update', tagsController.updateTag);
router.delete('/tags/delete', tagsController.deleteTag);

module.exports = router;
