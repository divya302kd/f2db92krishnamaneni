const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
bag_color: String,
bag_brand: String,
bag_price: Number
})
module.exports = mongoose.model("Bag",
bagSchema)