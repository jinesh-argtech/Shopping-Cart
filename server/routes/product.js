const express = require("express")
const { addProduct, getProducts, searchProducts } = require("../controllers/product")
const { isAdmin, isCustomer, auth } = require("../middlewares/auth")
const router = express.Router()

router.post("/addProduct",auth,isAdmin,addProduct)
router.get("/getProducts",auth,isCustomer,getProducts)
router.post("/searchProducts",auth,isCustomer,searchProducts)

module.exports = router