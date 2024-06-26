const mongoose = require("mongoose");

// Define the Tags schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    price:{
        type: Number,
        required: true,
    },
	description: { type: String },
	fileurl:{
        type:String
    },

});

// Export the Tags model
module.exports = mongoose.model("Product", productSchema);