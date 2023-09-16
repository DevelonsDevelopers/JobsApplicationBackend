const express = require('express')
const bookmarkController = require('../controllers/bookmark')

const router = express.Router();

router.post('/bookmarks/all', bookmarkController.getAllBookmarks)
router.post('/bookmarks/add', bookmarkController.bookmarkJob)
router.delete('/bookmarks/remove', bookmarkController.removeBookmark)

module.exports = router
