var Bag = require('../models/bag');
// List of all bags
exports.bag_list = async function(req, res) {
    try{
    theBags = await Bag.find();
    res.send(theBags);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
exports.bag_view_all_Page = async function(req, res) {
        try{
        theBags = await Bag.find();
        res.render('bag', { title: 'Bag Search Results', results: theBags });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
// for a specific bag.
exports.bag_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bag detail: ' + req.params.id);
};
// Handle bag create on POST.
exports.bag_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.bag_color = req.body.bag_color;
    document.bag_brand = req.body.bag_brand;
    document.bag_price = req.body.bag_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle bag delete form on DELETE.
exports.bag_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bag delete DELETE ' + req.params.id);
};
// Handle bag update form on PUT.
exports.bag_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bag update PUT' + req.params.id);
};