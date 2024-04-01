const express = require("express")
const { addToCart, removeFromCart } = require("../controllers/cart")

const router = express.Router()

router.post("/addToCart",addToCart)
router.post("/removeFromCart",removeFromCart)

module.exports = router