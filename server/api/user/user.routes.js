import express from "express";
const router = express.Router();

import * as userController from "./user.controllers.js";
import { requireSignIn } from "../../middlewares/auth.middleware.js";

router.post("/register", userController.registerUser);
router.post("/login", userController.login);
router.post("/logout", requireSignIn, userController.logout);

router
  .route("/profile")
  .get(requireSignIn, userController.getUserProfile)
  .put(requireSignIn, userController.updateUserProfile);

export default router;
