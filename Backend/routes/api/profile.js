const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Tests users route
// @access  Public
router.get('/', (req, res) => res.send('profile route'));

module.exports = router;
