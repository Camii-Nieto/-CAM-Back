const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required: true, unique: true},
        desc:{type: Array, required: true},
        img:{type: String, required: true},
        category:{type: String},
        storage:{type: Array},
        color:{type: Array},
        price:{type: Number, required: true},
        inStock:{type: Boolean, default: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);