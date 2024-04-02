const Product = require('../models/Product');
const cloudinary = require("cloudinary").v2
 
function isFileSupported (fileType,supportedTypes){
    return supportedTypes.includes(fileType);
}

async function uploadFileToCloudinariy(file,folder,quality){
    const options={folder};
    if(quality){
        options.quality=quality;
    }
    options.resource_type="auto";

    return await cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.addProduct = async (req, res) => {
    try {
        const {name,description,price} = req.body;

        const imageFile = req.files.imageFile;

        const supportedFiles = ["png","jpeg","jpg"];
        const fileType= imageFile.name.split('.')[1].toLowerCase();

        if(!isFileSupported(fileType,supportedFiles)){
            return res.status(400).json({
                success: false,
                message: "File type not supported"
            })
        }

        console.log(imageFile)

        const response = await uploadFileToCloudinariy(imageFile,"FileUploadApp")

        console.log(response)

        const fileData=await Product.create({
            name,description,price,fileurl:response.secure_url
        })

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            file: fileData
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
};

exports.getProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();
        // Send the products as a response
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            products: products
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

exports.searchProducts = async (req, res) => {
    try {
        const { search } = req.body; // Assuming search query is sent in the request body

        let query = {};
        // Check if there is a search query
        if (search) {
            // Case-insensitive search for products containing the search query
            query = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } }
                ]
            };
        }

        // Fetch products from the database based on the search query
        const products = await Product.find(query);

        // Send the products as a response
        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            products: products
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
};
