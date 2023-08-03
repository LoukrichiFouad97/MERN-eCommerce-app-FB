import asyncHandler from "../../../middlewares/asyncHandler";
import user from "../user.model.js";

// admin functionalities
//  1- get all users
//  2- get user by id
//  3- delete user by id
//  4- update user by id

// @desc    Get all users
// @route   GET /api/v1/admin/users
// @access  Private
export const getAllUsers = asyncHandler((req, res) => {
  res.json({
    message: "test success",
  });
});

// @desc    Get all users
// @route   GET /api/v1/admin/users/:id
// @access  Private
export const getUserByID = asyncHandler((req, res) => {
  res.json({
    message: "test success",
  });
});

// @desc    Get all users
// @route   POST /api/v1/admin/users/:id
// @access  Private
export const deleteUserByID = asyncHandler((req, res) => {
  res.json({
    message: "test success",
  });
});

// @desc    Get all users
// @route   PUT /api/v1/admin/users/:id
// @access  Private
export const updateUserByID = asyncHandler((req, res) => {
  res.json({
    message: "test success",
  });
});
