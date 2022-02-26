const express = require('express');

const feedController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('', feedController.getPosts);


module.exports = router;