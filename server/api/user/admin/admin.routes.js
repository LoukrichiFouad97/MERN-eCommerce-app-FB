import express from "express";

import * as adminController from "./admin.controller.js";
import {
  isAdmin,
  requireSignIn,
} from "../../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", requireSignIn, isAdmin, adminController.getAllUsers);

router
  .route("/:id")
  .get(requireSignIn, isAdmin, adminController.getUserByID)
  .post(requireSignIn, isAdmin, adminController.deleteUserByID)
  .put(requireSignIn, isAdmin, adminController.updateUserByID);

export default router;
