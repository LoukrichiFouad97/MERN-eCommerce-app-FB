import express from "express";
const router = express.Router();

import * as userController from "./user.controllers.js";

router.post("/", userController.registerUser);
router.post("/login", userController.login);
// router.post("/logout", userController.logout);
// router
//   .route("/profile")
//   .get(userController.getUserProfile)
//   .post(userController.updateUserProfile);

export default router;
