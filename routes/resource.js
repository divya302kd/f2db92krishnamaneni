var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bag_controller = require('../controllers/bag');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bag ROUTES ///
// POST request for creating a bag.
router.post('/bags', bag_controller.bag_create_post);
// DELETE request to delete bag.
router.delete('/bags/:id', bag_controller.bag_delete);
// PUT request to update bag.
router.put('/bags/:id', bag_controller.bag_update_put);
// GET request for one bag.
router.get('/bags/:id', bag_controller.bag_detail);
// GET request for list of all bag items.
router.get('/bags', bag_controller.bag_list);
module.exports = router;