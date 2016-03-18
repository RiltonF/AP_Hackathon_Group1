var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('view/index', { title: 'Express' });
});

/*
router.get('/database', function(req,res){
  var url = 'mongodb://localhost:27017/test';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
  });
});
*/

module.exports = router;
