var express = require('express');
var router = express.Router();

var exercises = require('./exercises');
var workouts = require('./workouts');

router.use('/exercises', exercises);
router.use('/workouts', workouts);

module.exports = router;