const cartItem = require("../models/cartItem");

exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        let cartitem = await cartItem.findOne({ product: productId });

        if (cartitem) {
            cartitem.quantity += quantity;
        } else {
            cartitem = new cartItem({
                product: productId,
                quantity: quantity
            });
        }

        await cartitem.save();

        res.status(200).json({
            success: true,
            message: "Product added to cart successfully",
            cartItem: cartitem
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Error adding product to cart"
        });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;

        const cartitem = await cartItem.findOne({ product: productId });
        console.log(cartitem)

        if (cartitem) {
            await cartitem.deleteOne();
            res.status(200).json({
                success: true,
                message: "Product removed from cart successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found in cart"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Error removing product from cart"
        });
    }
};
