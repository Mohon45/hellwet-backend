const { Router } = require("express");
const router = Router();

const userController = require("../controllers/user.controller");

/* GET users listing. */
router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);

module.exports = router;
