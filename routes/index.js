var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/exerciseList', function (req, res, next) {
    var collection = req.db.collection('exercises');
    collection.find({}).toArray(function(err, docs) {
        if (err) throw err;

        res.render('exerciseList', {'exerciseList' : docs});
    });
});

router.get('/exerciseListJSON', function (req, res, next) {
    var collection = req.db.collection('exercises');
    collection.find({}).toArray(function(err, docs) {
        if (err) throw err;

        res.json(docs);
    });
});

module.exports = router;