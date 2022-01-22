const Cart = require("../models/CartModel");

const createCart = async (req, res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err) {
        res.status(500).json(err)
    }
};

const updateCart = async (req,res)=>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
        );
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteCart = async (req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
};

const findCart = async (req, res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);     
    } catch (error) {
        res.status(500).json(error)
    }
};

const findAllCarts = async (req, res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {createCart, updateCart, deleteCart, findCart, findAllCarts}

