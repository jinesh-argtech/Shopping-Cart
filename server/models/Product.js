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
	img:
    {
        data: Buffer,
        contentType: String
    }

});

// Export the Tags model
module.exports = mongoose.model("Product", productSchema);