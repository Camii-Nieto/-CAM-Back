const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./middlewares/auth");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DBConnection Successfull!")).catch((err)=>console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});