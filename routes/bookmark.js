const express = require('express')
const bookmarkController = require('../controllers/bookmark')

const router = express.Router();

router.post('/job/bookmarks/all', bookmarkController.getAllBookmarks)
router.post('/job/bookmarks/add', bookmarkController.bookmarkJob)
router.delete('/job/bookmarks/remove', bookmarkController.removeBookmark)

module.exports = router
