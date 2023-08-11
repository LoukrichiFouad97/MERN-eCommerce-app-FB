import Product from "./product.model.js"

import asyncHandler from "../../middlewares/asyncHandler.js"


// @desc    Get all Products
// @route   GET /api/v1/products
// @access  Public
export const getAllProducts = asyncHandler(async function (req, res, next) {})

// @desc    Get Product By ID
// @route   GET /api/v1/products
// @access  Public
export const getProductByID = asyncHandler(async function (req, res, next) {})

// @desc    Create a new Product 
// @route   POST /api/v1/products
// @access  Private/admin
export const createProduct = asyncHandler(async function (req, res, next) {})

// @desc    Update product 
// @route   PUT /api/v1/products
// @access  Private/admin
export const updateProduct = asyncHandler(async function (req, res, next) {})

// @desc    Delete product
// @route   DELETE /api/v1/products
// @access  Private/admin
export const deleteProduct = asyncHandler(async function (req, res, next) {})









