var express = require('express');
var router = express.Router();
var express = require('express');
const bag_controlers= require('../controllers/bag');
var router = express.Router();
/* GET bags */
router.get('/', bag_controlers.bag_view_all_Page );

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('bag', { title: 'Search Results Bag' });
});
router.get('/detail',bag_controlers.bag_view_one_Page);
router.get('/create', bag_controlers.bag_create_Page);
router.get('/update', bag_controlers.bag_update_Page);
router.get('/delete', bag_controlers.bag_delete_Page);

module.exports = router;
