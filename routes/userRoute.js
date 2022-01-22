const {  verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
const controller = require("../controllers/userController");


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, controller.updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, controller.deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, controller.getUser);

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, controller.getAllUsers);

//GET USERS STATS
router.get("/stats", verifyTokenAndAdmin, controller.getUsersStats);

module.exports = router;