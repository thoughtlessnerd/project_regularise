const express = require("express");
const userController = require("../../controllers/user");
const { isAuthenticated } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);

// router.get("/test", isAuthenticated, (req, res) => {
//   res.status(200).json({ message: "success", req: req.user });
// });

module.exports = router;
