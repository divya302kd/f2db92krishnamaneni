var express = require('express');
var router = express.Router();
var express = require('express');
const bag_controlers= require('../controllers/bag');
var router = express.Router();
/* GET bags */
router.get('/', bag_controlers.bag_view_all_Page );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bag', { title: 'Search Results Bag' });
});


module.exports = router;
