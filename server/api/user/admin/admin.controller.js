import asyncHandler from "../../../middlewares/asyncHandler.js";
import User from "../user.model.js";

// admin functionalities
//  1- get all users
//  2- get user by id
//  3- delete user by id
//  4- update user by id

// @desc    Get all users
// @route   GET /api/v1/admin/users
// @access  Private/Admin
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc    Get User By ID
// @route   GET /api/v1/admin/users/:id
// @access  Private/Admin
export const getUserByID = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Delete User By ID
// @route   POST /api/v1/admin/users/:id
// @access  Private/Admin
export const deleteUserByID = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update User By ID
// @route   PUT /api/v1/admin/users/:id
// @access  Private/Admin
export const updateUserByID = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);

  if (user) {
    await user.save();
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
