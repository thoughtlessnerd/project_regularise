const express = require("express");
const userController = require("../../controllers/user");
const fieldController = require("../../controllers/field");
const imageController = require("../../controllers/image");
const quoteController = require("../../controllers/quote");
const { isAuthenticated } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/user/signup", userController.signUp);
router.post("/user/signin", userController.signIn);

router.get("/user", isAuthenticated, userController.getUser);

router.patch("/user", isAuthenticated, userController.updateUser);

router.patch("/user/password", isAuthenticated, userController.updatePassword);

router.get("/field", isAuthenticated, fieldController.getFields);
router.post("/field/create", isAuthenticated, fieldController.createField);
// router.post("/field/create", isAuthenticated, fieldController.createFields);
router.post("/field/done", isAuthenticated, fieldController.setDoneFields);
router.delete("/field", isAuthenticated, fieldController.deleteField);

router.get("/image", isAuthenticated, imageController.getProfileImage);
router.post("/image", isAuthenticated, imageController.uploadProfileImage);
router.put("/image", isAuthenticated, imageController.updateProfileImage);
router.delete("/image", isAuthenticated, imageController.deleteProfileImage);

router.get("/quote", quoteController.getQuoteForToday);

router.post("/task", isAuthenticated, userController.updateTasks);

module.exports = router;
