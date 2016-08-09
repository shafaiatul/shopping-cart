var express = require('express');
var router = express.Router();
var Product = require('../models/product');

var csurf = require('csurf');
var csurfProtection = csurf();
router.use(csurfProtection); //All the router shoud be protected by csurf protection

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, doc) {
    res.render('shop/index', { title: 'Shopping Cart', products: doc });
  });

});

router.get('/user/signup', function(req, res, next) {
    res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
