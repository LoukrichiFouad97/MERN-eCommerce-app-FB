import asyncHandler from "../../middlewares/asyncHandler.js";
import generateToken from "../../utils/generateToken.js";
import User from "./user.model.js";

// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @desc    logout user & clear the cookies
// @route   POST /api/v1/users/logout
// @access  Private
const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt_token", null, { expires: new Date(0), httpOnly: true });
  res.status(200).json({ message: "user logged out" });
});

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // 1- validate user input
  // 2- validate if user is already registered
  // 3- encrypt user password
  // 4- create new user in database
  // 5- create a signed JWT token

  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`User ${name} already exists`);
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.status(201);
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });

    generateToken(res, newUser._id);
  } else {
    res.status(400);
    throw new Error("Invalid user data received");
  }
});

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/v1/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { login, logout, registerUser, getUserProfile, updateUserProfile };
