const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
	cors({
		origin:"https://main--charming-dieffenbachia-aef712.netlify.app",
		credentials:true,
	})
)

const database = require("./config/database");

const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");
const dotenv = require("dotenv");

database.connect();

app.use(express.json());
app.use(cookieParser());
const fileUpload= require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/auth", userRoutes);


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