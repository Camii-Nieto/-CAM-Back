const {  verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
const controller = require("../controllers/cartController");

//CREATE
router.post("/", verifyToken, controller.createCart)


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, controller.updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, controller.deleteCart);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization , controller.findCart);

//GET ALL
router.get("/", verifyTokenAndAdmin, controller.findAllCarts);



module.exports = router;