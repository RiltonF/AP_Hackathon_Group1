var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Test = require("../model/test.js");

/* GET /todos listing. */
router.get('/', function(req, res, next) {
    Test.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* POST /todos */
router.post('/', function(req, res, next) {
    Test.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    Test.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Test.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Test.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;