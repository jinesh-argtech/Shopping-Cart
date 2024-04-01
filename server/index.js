const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

const database = require("./config/database");

database.connect();

app.use(express.json());

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})