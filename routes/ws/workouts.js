var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {
    var collection = req.db.collection('workouts');
    collection.find({}).toArray(function(err, docs) {
        if (err) throw err;

        res.render('ws/workoutsList', { 'workoutsList': docs });
    });
});

router.get('/listJSON', function(req, res, next) {
    var collection = req.db.collection('workouts');
    collection.find({}).toArray(function(err, docs) {
        if (err) throw err;

        res.json(docs);
    });
});

module.exports = router;