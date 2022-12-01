const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
bag_color: String,
bag_brand: {type:String,length:15},
bag_price: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("Bag",
bagSchema)