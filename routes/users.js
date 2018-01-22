var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    User = require("../models/user");

mongoose.connect('mongodb://stefan:stefan@ds135916.mlab.com:35916/my_first_api');

//ROUTES
router.use(function timeLog(req, res, next) {
    var d = new Date();
    console.log('Time: ', d.toUTCString())
    next()
})
//get all users from db
router.get("/", function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
})
//show info about one user
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, post) {
        if (err) {
            console.log(err);
        } else {
            res.json(post);
        }
    });
});

// add user to db
router.post('/', function (req, res, next) {
    User.create(req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});
   

//update user
router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

/* delete user */
router.delete('/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

module.exports = router;