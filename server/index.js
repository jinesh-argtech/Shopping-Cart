const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

const database = require("./config/database");

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

database.connect();

app.use(express.json());
const fileUpload= require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect()