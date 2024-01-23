const express = require("express");
const userController = require("../../controllers/user");
const fieldController = require("../../controllers/field");
const { isAuthenticated } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/user/signup", userController.signUp);
router.post("/user/signin", userController.signIn);

router.get("/user", isAuthenticated, userController.getUser);

router.get("/field", isAuthenticated, fieldController.getFields);
router.post("/field/create/1", isAuthenticated, fieldController.createField);
router.post("/field/create", isAuthenticated, fieldController.createFields);
router.post("/field/done", isAuthenticated, fieldController.setDoneFields);
router.delete("/field", isAuthenticated, fieldController.deleteField);

// router.get("/test", isAuthenticated, (req, res) => {
//   res.status(200).json({ message: "success", req: req.user });
// });

module.exports = router;
