const {verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const router = require("express").Router();
const controller = require("../controllers/productController");

//CREATE

router.post("/", verifyTokenAndAdmin, controller.createProduct);


//UPDATE
router.put("/:id", verifyTokenAndAdmin, controller.updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, controller.deleteProduct);

//GET PRODUCT
router.get("/find/:id", controller.getProduct);

//GET ALL PRODUCTS
router.get("/", controller.getProducts);



module.exports = router;