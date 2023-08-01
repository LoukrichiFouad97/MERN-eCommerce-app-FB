import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../api/user/user.model.js";

export const requireSignIn = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt_token;

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    res.status(401);
    throw new Error("not authorized! token failed");
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
});
