var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, doc) {
    res.render('shop/index', { title: 'Shopping Cart', products: doc });
  });

});

module.exports = router;
