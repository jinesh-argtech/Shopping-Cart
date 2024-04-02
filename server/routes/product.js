const express = require("express")
const { addProduct, getProducts, searchProducts } = require("../controllers/product")
const router = express.Router()

router.post("/addProduct",addProduct)
router.get("/getProducts",getProducts)
router.post("/searchProducts",searchProducts)

module.exports = router