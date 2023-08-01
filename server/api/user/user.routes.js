import express from "express";
const router = express.Router();

import * as userController from "./user.controllers.js";
import { isAdmin, requireSignIn } from "../../middlewares/auth.middleware.js";

router.post("/register", userController.registerUser);
router.post("/login", requireSignIn, isAdmin, userController.login);

// router.post("/logout", userController.logout);
// router
//   .route("/profile")
//   .get(userController.getUserProfile)
//   .post(userController.updateUserProfile);

export default router;
