const express = require('express');
const router = express.Router();
const createImage = require('../controllers/createImage');



router.post('/create', createImage.createImage);
router.post('/share', createImage.share);
router.get('/api/posts', createImage.posts);


module.exports = router;